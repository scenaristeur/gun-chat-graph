<script>
  import ForceGraph3D from "3d-force-graph";
  import { onMount, afterUpdate } from "svelte";
  export let messages;

  let myGraph;
  let canvasDom;

  onMount(() => {
    myGraph = ForceGraph3D();
    myGraph(canvasDom)
      // .graphData(gData)
      .onNodeClick(onNodeClick);
  });

  afterUpdate(() => {
    // console.log("messages length:", messages.length);
    update();
  });

  function onNodeClick(node) {
    console.log(node);
  }
  function removeNode(node) {
    let { nodes, links } = myGraph.graphData();
    links = links.filter((l) => l.source !== node && l.target !== node); // Remove links attached to node
    nodes.splice(node.id, 1); // Remove node
    nodes.forEach((n, idx) => {
      n.id = idx;
    }); // Reset node ids to array index
    myGraph.graphData({ nodes, links });
  }

  function update() {
    console.log(messages);
    //let nodes = messages.map((m) => ({ id: m.id, label: m.what }));
    let { nodes, links } = myGraph.graphData();
    messages.forEach((m) => {
      let n = { id: m.id, name: m.what };
      let index = nodes.findIndex((x) => x.id == m.id);
      index === -1 ? nodes.push(n) : Object.assign(nodes[index], n);
    });

    myGraph.graphData({
      nodes: nodes, // messages, //[...nodes, { id }],
      links: links, //[...links, { source: id, target: Math.round(Math.random() * (id-1)) }]
    });
  }

  // Random tree
  // const N = 5;
  // const gData = {
  //   nodes: [...Array(N).keys()].map((i) => ({ id: i })),
  //   links: [...Array(N).keys()]
  //     .filter((id) => id)
  //     .map((id) => ({
  //       source: id,
  //       target: Math.round(Math.random() * (id - 1)),
  //     })),
  // };
</script>

<div class="graph">
  <br /><br />
  <hr />

  <time>
    <div bind:this={canvasDom} />
    {JSON.stringify(messages)}
  </time>
</div>

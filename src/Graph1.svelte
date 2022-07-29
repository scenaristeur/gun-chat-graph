<script>
  export let messages;
  console.log("graph");
  // export let message;
  // export let sender;
  //
  // const messageClass = message.who === sender ? "sent" : "received";
  //
  // const avatar = `https://avatars.dicebear.com/api/initials/${message.who}.svg`;
  //
  // const ts = new Date(message.when);
</script>

<div>
  <br /><br />
  <hr />
  Here is the graph<br />
  <div id="3d-graph" />
  end of graph
  <time>{JSON.stringify(messages)}</time>
</div>

<!-- <div class={`message ${messageClass}`}>
<img src={avatar} alt="avatar" />
<div class="message-text">
<p>{message.what}</p>

<time>{ts.toLocaleTimeString()}</time>
<time>{JSON.stringify(message)}</time>
</div>
</div> -->

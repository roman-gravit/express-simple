/* onconnect = function(e) {
  const port = e.ports[0];

  port.onmessage = function(e) {
    console.log("worker")
    port.postMessage(100);
  }
} */

onconnect = (event) => {

  const ports = new Set();
  const id = Math.floor(Math.random() * 999999);

  console.log(`shared-worker.js-> ID: ${id}`);

  const port = event.ports[0];
  ports.add(port);

  console.log("worker:onconnect ", id, ports.size);
  
  port.onmessage = (event) => {
    console.log("worker:onmessage ", id, event.data);
    for (let p of ports) {
	  console.log('worker:postMessage...');
      p.postMessage([id, event.data]);
    }
  };
}; 

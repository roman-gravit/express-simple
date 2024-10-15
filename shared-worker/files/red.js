console.log("red.js->");

const worker = new SharedWorker("shared-worker-1.js");

console.log("   red.js worker:", worker);

worker.port.onmessage = (event) => {
  console.log("RED:onmessage ", event.data);
};

worker.onerror = (event) => {
  console.error("There is an error with your worker!");
};
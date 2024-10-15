console.log("blue.js->");

const worker = new SharedWorker("shared-worker-1.js");

worker.port.start();

worker.port.onmessage = (event) => {
  console.log("BLUE:onmessage ", event.data);
};

worker.onerror = (event) => {
  console.error("There is an error with your worker!");
};
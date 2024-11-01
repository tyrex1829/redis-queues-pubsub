Client will hit a request on api backend, api backend with pass that request with request ID to redis queue, so that engine will pop with request perform the task, and publish the response to their subscribers with the help of redis pub-sub.
WebSocket will subscribe the publisher and give response to all the connected clients.

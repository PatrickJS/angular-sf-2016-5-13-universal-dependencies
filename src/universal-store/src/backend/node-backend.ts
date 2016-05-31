// or redis
export var inMemoryStore = {
  data: 'Angular SF meetup'
};


export class NodeBackend {
  getValue(prop) {
    return inMemoryStore[prop] || null;
  }
  setValue(prop, value) {
    return inMemoryStore[prop] = value;
  }
}


// App,

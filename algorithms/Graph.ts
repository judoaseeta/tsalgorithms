type AdjacencyList = (string|number)[];

interface GraphObjectType<P> {
    [stringKey : string ] : {
        value: P,
        edges: AdjacencyList;
    }
    [numKey : number ] : {
        value: P,
        edges: AdjacencyList;
    }
}

class Graph<P> {
    adjacencyObject: GraphObjectType<P> = {};
    addVertex(key: string |number, value: P) {
        this.adjacencyObject[key] = {
            value: value,
            edges: []
        }
    }
    addEdge(edge1: string|number, edge2: string|number) {
        this.adjacencyObject[edge1].edges.push(edge2);
        this.adjacencyObject[edge2].edges.push(edge1);
    }
    removeEdge(vertice1: string | number, vertice2: string | number) {
        
    }
}
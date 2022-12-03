class My_websocket{
    targets: Map<string, any>;
    ws: any
    is_open: boolean
    constructor(address: string) {
        console.log('my_websocket allocated')
        this.targets=new Map()
        this.ws=new WebSocket(address)
        this.is_open=false
        this.ws.onopen = () => {
            this.is_open=true
        }
        this.ws.onclose = (msg: any) => {
            console.log(msg)
        };
        this.ws.onerror = (error: any) => {
            console.log(error)
        };
        this.ws.onmessage=(msg: any)=>{
            let json: any=JSON.parse(msg.data)
            this.targets.get(json.target)(json)
        }
    }
    add_target(target: string, callback: (json: any)=>void){
        this.targets.set(target, callback)
    }
    send(msg: string){
        // while(!this.is_open){}
        this.ws.send(msg)
    }
}
console.log('my_websocket imported')
export default My_websocket
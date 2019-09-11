module.exports = function (server, handler, settings){
    handler.onBind(function(next){
        this.client.write('declare_commands', {
            nodes: [],
            rootIndex: 0
        });
        next();
    });

    handler.on('tab_complete', function(next, data){
        this.client.write('tab_complete', {
            transactionId: data.transactionId,
            start: data.text.length,
            length: 0,
            matches: []
        });
        next();
    })
}
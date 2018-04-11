var app = new Vue ({
    el: '#app',
    data: {
        success : true,
        message: 'Hello Vue!'
    },
    methods:{
        close : function () {
            this.success = false
        }
    }


})
.factory('$storage', function() {
    return {
        data: [],
        set: function(index, data) {
            this.data[index] = data;
        },
        get: function(index) {
            return this.data[index] || [];
        }
    };
})
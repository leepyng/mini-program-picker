//index.js
const app = getApp();
Component({
    properties: {
        //多列选择器的原始树 
        array:{
            type:Array,
            value:[]
        },
        //选中的值的下标数组
        value:{
            type:Array,
            value:[0.0,0]
        },
        //需要遍列的子树字段名
        child:{
            type:String,
            value:'goverenedRegions'
        },
        //是否显示
        isInputShow:{
            type:Boolean,
            value:false
        },
        //关键字查询字段
        name:{
            type:String,
            value:''
        },
        //选择器显示的名字 字段
        itemName:{
            type:Array,
            value:['name']
        }

    },
    // 在组件实例进入页面节点树时执行
    attached: function() {
        console.log(this.properties.array);
    },
    methods: {
        inputTyping (e) {
            this.setData({
                name: e.detail.value
            });
        },
        //重新输入关键词查询 
        reSetKeyName(e){
            this.triggerEvent('reSetKeyName',this.properties.name);
        },
       	//关闭
       	close(){
       		this.triggerEvent('bindComfirm');
       	},
       	//选中的值的下标数组
       	bindChange(e){
            const value=e.detail.value;
            this.setData({
              value:value
            })
       	} ,
        //确定
        bindComfirm(){ 
            const array=this.data.array;
            const value=this.data.value;
            if(!array||array.length<1){
              this.triggerEvent('bindComfirm');
              return;
            }
            this.triggerEvent('bindComfirm',value);
        }

    }

})

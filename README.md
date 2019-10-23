# mini-program-picker
a pikcer component for mini program to select 

# 使用方法
	1、.json 文件引入该文件
   "usingComponents":{
        "mp-picker": "./components/picker/picker"
    }
    
    2、.wxml 文件引入组件，并填写配置信息
    <mp-picker wx:if="{{isPickerShow}}" value="{{[0,0,0]}}" array="{{addressArray}}" child="goverenedRegions" itemName="{{['name','name','name']}}"  bind:bindComfirm="bindPickerComfirm"></mp-picker>

    3、参数解释

    1）value：指选中的值
    2）array：源数组列表
    3）child：下一级的字段名
    4）itemName：选择器显示文字的字段名
    5）bindComfirm：选择结束回调

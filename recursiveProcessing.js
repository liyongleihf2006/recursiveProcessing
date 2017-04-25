/**
 * Created by LiYonglei on 2017/4/25.
 * 递归处理传入的数组数据
 *params:
 *      datas:传入的数组数据
 *      handler:对每条数据处理的调用函数
 *              currentData 当前数据
 *              level 当前数据所在的层级
 *              idx 当前数据在当前数组中的索引位置
 *              currentDatas 当前数据所在的数组
 *              upperData 当前数据的父层数据
 *              datas 所有传入的数据
 *      lowerLevelKey 级联子数据数组的键,defaults:"children"
 */
function recursiveProcessing(datas,handler,lowerLevelKey){
    lowerLevelKey=lowerLevelKey||"children";
    recursive(datas,null,-1);
    function recursive(currentDatas,upperData,level){
        currentDatas.forEach(function(currentData,idx){
            if(!idx){level++};
            handler(currentData,level,idx,currentDatas,upperData,datas);
            var lowerDatas=currentData[lowerLevelKey];
            if(lowerDatas&&lowerDatas instanceof Array){
                recursive(lowerDatas,currentData,level);
            }
        });
    }
};
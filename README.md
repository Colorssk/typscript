# typscript
typscript to make wheels
test

ctr+shift+b快捷键配置：
{
    // See https://go.microsoft.com/fwlink/?LinkId=733558
    // for the documentation about the tasks.json format
    "version": "2.0.0",
    "tasks": [
        {
            "label": "echo",
            "type": "shell",
            "command": "node",
            "args":["${file}"],
            "group":{
                "kind": "build",
                "isDefault": true
            }
        }
    ]
}
colorssk
纯函数不仅可以有效降低系统的复杂度，还有很多很棒的特性，比如可缓存性：

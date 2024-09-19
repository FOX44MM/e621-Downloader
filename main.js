console.log('This script made by ChangJiu');
console.log('开始运行脚本');

function get_pool_all_file_url(pool_id) {
    var list = document.getElementById('posts-container');//获取内容
    console.log("共获取到"+list.children.length+"条数据");

    for (var i = 0 ; i < list.children.length; i++){//获取原始文件的链接
        console.log(list.children[i].getAttribute('data-file-url'));
    }
}


        // .button{
        //     box-sizing: border-box;
        //     color: whitesmoke;
        //     display: inline-block;
        //     font-size: 1rem;
        //     line-height: 1.25rem;
        //     border-width: 0px;
        //     border-style: initial;
        //     border-color: initial;
        //     border-image: initial;
        //     border-radius: 6px;
        //     padding: 0.25rem 0.5rem;
        // }
        // .button:hover{
        //     background-color:rgb(24, 24, 112);
        //     cursor: pointer;
        // }
console.log('向网页中添加按钮')

/*--------------------------------------------------*/
var download_button = document.createElement('input');
download_button.type = 'button';
download_button.value = 'Download as a zip Archive';
download_button.style.backgroundColor = "rgb(1, 84, 157)";
download_button.style.boxSizing = "border-box";
download_button.style.color = "whitesmoke";
download_button.style.display = "inline-block";
download_button.style.fontSize = "1rem";
download_button.style.lineHeight = "1.25rem";
download_button.style.borderWidth = "0px";
download_button.style.borderStyle = "initial";
download_button.style.borderColor = "initial";
download_button.style.borderImage = "initial";
download_button.style.borderRadius = "6px";
download_button.style.padding = "0.25rem 0.5rem";
document.getElementById('a-show').appendChild(download_button);
/*--------------------------------------------------*/







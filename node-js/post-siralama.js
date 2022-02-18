/* 
Blog oluşturmaya hazır mısınız? 
Konsol ekranında postlarımızı sıralayalım, 
sonrasında yeni bir post oluşturalım 
ve yeni post ile birlikte postlarımızı 
tekrar sıralayalım.
*/

const showPostList = (list) => {

    return new Promise((resolve, reject) => {

        if (list.length > 0) {
            list.map((item) => {
                console.log(item);
            })
            resolve("postlar listelendi");
        }
        else {
            reject("postlar listelenirken bir hata oluştu")
        }
    })

}

const addItem = (list, data) => {

    return new Promise((resolve, reject) => {

        if (data && list) {
            list.push(data);
            resolve("data eklendi");
        }
        else {
            reject("data eklenirken bir hata oluştu")
        }

    })

}

const asyncProcess = async () => {

    let blogPostList = [
        { author: 'Enes', title: 'Lorem1', body: 'Lorem1' },
        { author: 'Taha', title: 'Lorem2', body: 'Lorem2' },
        { author: 'Vardar', title: 'Lorem3', body: 'Lorem3' },
    ]

    const newData = { author: 'Vardar', title: 'Lorem3', body: 'Lorem3' };

    try {
        
        await showPostList(blogPostList).then((data)=>console.log(data)).catch((err)=>console.log(err));
        await addItem(blogPostList,newData).then((data)=>console.log(data)).catch((err)=>console.log(err));
    }
    catch {
        console.log('bir hata olustu!')
    }
}

asyncProcess()






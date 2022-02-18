const fs = require('fs')

const writeFile = (file, data) => {

    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, 'utf8', (err) => {
            if (err) reject(err)
            resolve("yazma işlemi başarılı")
        })
    })
}

const readFile = (file) => {

    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf8', (err,data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}

const appendFile = (file, data) => {

    return new Promise((resolve, reject) => {
        fs.appendFile(file, '\n' + data, 'utf8', (err) => {
            if (err) reject(err)
            resolve("güncelleme işlemi başarılı")
        })
    })
}

const deleteFile = (file) => {

    return new Promise((resolve, reject) => {
        fs.unlink(file, (err) => {
            if (err) reject(err)
            resolve("yazma işlemi başarılı")
        })
    })
}

const process = async () => {

    const obje = { "name": "Employee 1 Name", "salary": 2000 }
    const path = "employees.json";

    await writeFile("employees.json", JSON.stringify(obje)).
        then((result)=>{console.log(result)}).
        catch((err)=>{console.log(err)});

    await readFile("employees.json").
        then((result)=>{console.log(result)}).
        catch((err)=>{console.log(err)});

    const newObje = { "name": "Enes Vardar", "salary": 3000 }

    await appendFile("employees.json", JSON.stringify(newObje)).
        then((result)=>{console.log(result)}).
        catch((err)=>{console.log(err)});

    await deleteFile("employees.json").
        then((result)=>{console.log(result)}).
        catch((err)=>{console.log(err)});
    
}

process();




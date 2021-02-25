function getSelectValues(select) {
    const result = [];
    let opt;
  
    for (var i=0; i<select.length; i++) {
      opt = select[i];
  
      if (opt.selected) {
        result.push(opt.value);
      }
    }
    return result;
}

function stringForSize(size){
    if(size){
        return `size=${size}`;
    }
    return '';
}

function multiSelectString(select, key){
    let str = '';

    if(size){
        if(key === 'color'&& colors.length > 0){
            str = '&';
        }

        if(key === 'manufacture' && manufactures.length > 0 ){
            str = '&';
        }
    }
    
    for (let i = 0; i < select.length; i++){
        if(i === select.length - 1){
            str = str + `${key}=` + select[i];
        } else {
            str = str + `${key}=` + select[i] + '&';
        }
    }
    return str;
}

function newUrl (size, colors, manufactures){
    console.log(`http://любой_домен/filter?${stringForSize(size)}${multiSelectString(colors, 'color')}${multiSelectString(manufactures, 'manufacture')}`);
}


let url = `http://любой_домен/filter`;
let size = false;
const colors = [];
const manufactures = [];
let content = document.getElementById('content');

content.onclick = event => {
  let target = event.target;

  while (target != this) {
    if (target.tagName === 'INPUT') {
        if (target.name === 'size'){
            // console.log(target.value);
            size = target.value;
            newUrl(size, colors, manufactures);
            return;
        }

        if (target.name === 'color'){
            if (colors.includes(target.value)){
                colors.splice(colors.indexOf(target.value), 1);
            } else {
                colors.push(target.value);
            }
            newUrl(size, colors, manufactures);
            return;
        }
      return;
    }

    if (target.tagName == 'OPTION') {
        let el = document.getElementsByTagName('select')[0];
        manufactures.splice(0, manufactures.length, ...getSelectValues(el));
        newUrl(size, colors, manufactures);
        return;
    }

    target = target.parentNode;
    return;
  }
}



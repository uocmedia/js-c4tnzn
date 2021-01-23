// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// Input: ["abc","xyz","cba","lmn","yzx","xxz","bca"]
// Output: ["abc,cba,bca","xyz,yzx","lmn","xxz"]

function convertStrings (sourceArray)
{
    // let sourceArray = source;
    let targetArray = [];

for(var i=0; i < sourceArray.length; i++) {
  
}
    source.

    source.split('');

    let item = sourceArray.reduce((all, element) => {
        switch (element) {
            case 'a' || 'A':
                all.push('4');
                break;
            case 'e' || 'E':
                all.push('3');
                break;
            case 'i' || 'I':
                all.push('1');
                break;
            case 'o' || 'O':
                all.push('0');
                break;
            case 's' || 'S':
                all.push('5');
                break;
            case 't' || 'T':
                all.push('7');
                break;
            case 'b' || 'B':
                all.push('5');
                break;
            default:
                all.push(element)
        }
        return all;
    }, []).join('');

    targetArray.push(item);

    return targetArray;
}


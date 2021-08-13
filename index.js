const sampleData = require('./data');

function init(data) {
    try {
        const finalData = [];
        for (let i = 0; i < data.length; i += 1) {
            const item = data[i];
            const innerData = [];

            if (item) innerData.push(item);

            for (let j = 0; j < data.length; j += 1) {
                const innerItem = data[j];

                const isSameWords = item === innerItem;
                const isEmpty = !item || !innerItem;
                const isDifferentLength = item.length !== innerItem.length;

                if (isSameWords || isEmpty || isDifferentLength) continue;

                const objItem = {};
                const objInnerItem = {};

                for (let k = 0; k < innerItem.length; k += 1) {
                    const itemString = item[k];
                    const innerItemString = innerItem[k];

                    objItem[itemString] = itemString;
                    objInnerItem[innerItemString] = innerItemString;
                }

                const objItemTotalField = Object.keys(objItem).length;
                const objInnerItemTotalField = Object.keys(objInnerItem).length;

                if (objItemTotalField !== objInnerItemTotalField) continue;

                const finalObj = {};

                for (let l = 0; l < objItemTotalField; l += 1) {
                    const itemString = Object.keys(objItem)[l];
                    const innerItemString = Object.keys(objInnerItem)[l];

                    finalObj[itemString] = itemString;
                    finalObj[innerItemString] = innerItemString;
                }

                const totalField = Object.keys(finalObj).length;

                if (totalField !== objItemTotalField) continue;

                innerData.push(innerItem);

                data[i] = '';
                data[j] = '';
            }

            if (innerData.length > 0) finalData.push(innerData);
        }

        console.log(finalData);
    } catch (error) {
        console.log(error.message);
    }
}

init(sampleData);

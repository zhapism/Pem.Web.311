document.getElementById('result').addEventListener('click', function() {
     var n1=parseFloat(document.getElementById('num1').value);
     var n2=parseFloat(document.getElementById('num2').value);
     var r = n1 + n2;
     alert("Hasil Penjumlahan = " + r)     
})

document.getElementById('reset').addEventListener('click', function () {
     document.getElementById('num1').value = '';
     document.getElementById('num2').value = '';
})


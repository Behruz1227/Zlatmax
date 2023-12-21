function changeImage() {
    var birinchiRasm = document.getElementById('birinchiRasm');
    var ikkinchiRasm = document.getElementById('ikkinchiRasm');

    if (birinchiRasm.style.display !== 'none') {
      birinchiRasm.style.display = 'none';
      ikkinchiRasm.style.display = 'inline-block';
    } else {
      birinchiRasm.style.display = 'inline-block';
      ikkinchiRasm.style.display = 'none';
    }
  }
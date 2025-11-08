function drop() {
    let inp = document.getElementById('inp').value;
    if (inp == 'flow') {
        document.getElementById('flow_1').style.boxShadow = '5px 5px 5px black';
        document.getElementById('flow_2').style.boxShadow = '5px 5px 5px black';
        document.getElementById('flow_3').style.boxShadow = '5px 5px 5px black';
        document.getElementById('flow_4').style.boxShadow = '5px 5px 5px black';
        document.getElementById('hidden').style.display = 'block';
    }
}

function hidden_1() {

    document.getElementById('flow_1').style.display = 'none';
    document.getElementById('flow_2').style.display = 'none';
    document.getElementById('flow_3').style.display = 'none';
    document.getElementById('flow_4').style.display = 'none';
    document.getElementById('flow_5').style.display = 'block';
    document.getElementById('flow_6').style.display = 'block';
    document.getElementById('flow_7').style.display = 'block';
    document.getElementById('flow_8').style.display = 'block';
    document.getElementById('hidden').style.display = 'none';
    document.getElementById('btn').style.display = 'none';
    document.getElementById('inp').style.display = 'none';
    document.getElementById('fill').style.height = '200px';
    document.getElementById('fill').style.backgroundColor = 'white';


}





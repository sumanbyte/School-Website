let mapouter = document.getElementById('mapouter');
mapouter.innerHTML = `
<div class="gmap_canvas"><iframe width="300" height="200" id="gmap_canvas"
        src="https://maps.google.com/maps?q=Jeevan%20Jyoti%20English%20School%20(+2),%20Mahendranagar&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><br>
    <style>
        #mapouter {
            position: relative;
            text-align: right;
            height: 200px;
            width: 300px;
        }
    </style>
    <style>
        .gmap_canvas {
            overflow: hidden;
            background: none !important;
            height: 200px;
            width: 300px;
        }
    </style>
</div>
`;
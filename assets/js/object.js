for (i = 0; i != 30; i++) {
    new Zdog.Shape({
        addTo: piramid,
        path: [ // triangle
            { x: i * 0, y: i * -95 },
            { x: i * 90, y: i * 60 },
            { x: i * -90, y: i * 60 },
        ],
        stroke: i * 1.5,
        color: 'gray',
        translate: {
            y: -100,
            z: i*120
        },
        rotate: {
            z: 9.42
        }
    });
}




function animate() {
    mv = 0.000
    for (i = 0; i != 30; i++) {
        piramid.children[i].rotate.z += mv
        mv = mv + 0.00005
    }
    piramid.updateRenderGraph();
    requestAnimationFrame(animate);
}
animate();
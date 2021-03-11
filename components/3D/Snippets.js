// animer un mesh de haut en bas
// (
//     let descend = true;
//   useFrame(() => {
//     ref.rotation.x = ref.rotation.y = ref.rotation.z += 0.01;
    
//     if (ref.position.y <= position[1]-1.5) {
//       descend = false;
//     }
//     if (ref.position.y >= position[1]+1.5) {
//       descend = true;
//     }

//     if (descend) {
//       ref.position.y -= 0.01;
//     } else {
//       ref.position.y += 0.01;
//     }
//   });
// )

// animation smooth d'une valeur a une autre en loop
// Math.sin(state.clock.getElapsedTime()) * delay;
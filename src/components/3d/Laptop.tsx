import * as THREE from 'three';
import * as React from 'react';
import type { JSX } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Cube020: THREE.Mesh;
    Cube020_1: THREE.Mesh;
    Cube020_2: THREE.Mesh;
    Cube020_3: THREE.Mesh;
    Cube020_4: THREE.Mesh;
    Text: THREE.Mesh;
    Text001: THREE.Mesh;
    Text002: THREE.Mesh;
    Text003: THREE.Mesh;
    Text004: THREE.Mesh;
    Text005: THREE.Mesh;
    Text006: THREE.Mesh;
    Text007: THREE.Mesh;
    Text008: THREE.Mesh;
    Text009: THREE.Mesh;
    Text010: THREE.Mesh;
    Text011: THREE.Mesh;
    Text012: THREE.Mesh;
    Text013: THREE.Mesh;
    Text014: THREE.Mesh;
    Text015: THREE.Mesh;
    Text016: THREE.Mesh;
    Text017: THREE.Mesh;
    Text018: THREE.Mesh;
    Text019: THREE.Mesh;
    Text020: THREE.Mesh;
    Text021: THREE.Mesh;
    Text022: THREE.Mesh;
    Text023: THREE.Mesh;
    Text024: THREE.Mesh;
    Text025: THREE.Mesh;
    Text026: THREE.Mesh;
    Text027: THREE.Mesh;
    Text028: THREE.Mesh;
    Text029: THREE.Mesh;
    Text030: THREE.Mesh;
    Text031: THREE.Mesh;
    Text032: THREE.Mesh;
    Text033: THREE.Mesh;
    Text034: THREE.Mesh;
    Text035: THREE.Mesh;
    Text036: THREE.Mesh;
    Text037: THREE.Mesh;
    Text038: THREE.Mesh;
    Text039: THREE.Mesh;
    Text040: THREE.Mesh;
    Text041: THREE.Mesh;
    Text042: THREE.Mesh;
    Text043: THREE.Mesh;
    Text044: THREE.Mesh;
    Text045: THREE.Mesh;
    Text046: THREE.Mesh;
    Text047: THREE.Mesh;
    Text048: THREE.Mesh;
    Text049: THREE.Mesh;
    Text050: THREE.Mesh;
    Text051: THREE.Mesh;
    Text052: THREE.Mesh;
    Text053: THREE.Mesh;
    Text054: THREE.Mesh;
    Text055: THREE.Mesh;
    Text056: THREE.Mesh;
    Text057: THREE.Mesh;
    Text058: THREE.Mesh;
    Text059: THREE.Mesh;
    Text060: THREE.Mesh;
    Text061: THREE.Mesh;
    Text062: THREE.Mesh;
    Text063: THREE.Mesh;
    Text064: THREE.Mesh;
    Text065: THREE.Mesh;
    Text066: THREE.Mesh;
    Text067: THREE.Mesh;
    Text068: THREE.Mesh;
    Text069: THREE.Mesh;
    Text071: THREE.Mesh;
    Text070: THREE.Mesh;
    Text072: THREE.Mesh;
    Text073: THREE.Mesh;
    Text074: THREE.Mesh;
    Text075: THREE.Mesh;
    Text076: THREE.Mesh;
    Text077: THREE.Mesh;
    Text078: THREE.Mesh;
    Text079: THREE.Mesh;
    Text080: THREE.Mesh;
    Text081: THREE.Mesh;
    Text082: THREE.Mesh;
    Text083: THREE.Mesh;
    Text084: THREE.Mesh;
    Text085: THREE.Mesh;
    Text086: THREE.Mesh;
    Text087: THREE.Mesh;
    Text088: THREE.Mesh;
    Text089: THREE.Mesh;
    Text090: THREE.Mesh;
    Text091: THREE.Mesh;
    Text092: THREE.Mesh;
    Text093: THREE.Mesh;
    Text094: THREE.Mesh;
    Text095: THREE.Mesh;
    Text096: THREE.Mesh;
  };
  materials: {
    Base: THREE.MeshPhysicalMaterial;
    Black: THREE.MeshStandardMaterial;
    Screen: THREE.MeshPhysicalMaterial;
    ['Material.001']: THREE.MeshStandardMaterial;
  };
};

export function Laptop(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/Lenovo LOQ.glb') as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <group name="Lower_Part" position={[0.045, 0.131, -0.527]} scale={[1, 1, 0.972]}>
          <mesh
            name="Cube020"
            castShadow
            receiveShadow
            geometry={nodes.Cube020.geometry}
            material={materials.Base}
          />
          <mesh
            name="Cube020_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube020_1.geometry}
            material={nodes.Cube020_1.material}
          />
          <mesh
            name="Cube020_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube020_2.geometry}
            material={materials.Black}
          />
          <mesh
            name="Cube020_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube020_3.geometry}
            material={materials.Screen}
          />
          <mesh
            name="Cube020_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube020_4.geometry}
            material={materials['Material.001']}
          />
        </group>
        <mesh
          name="Text"
          castShadow
          receiveShadow
          geometry={nodes.Text.geometry}
          material={nodes.Text.material}
          position={[-0.89, 0.138, -0.737]}
          scale={0.028}
        />
        <mesh
          name="Text001"
          castShadow
          receiveShadow
          geometry={nodes.Text001.geometry}
          material={nodes.Text001.material}
          position={[-0.787, 0.138, -0.737]}
          scale={0.028}
        />
        <mesh
          name="Text002"
          castShadow
          receiveShadow
          geometry={nodes.Text002.geometry}
          material={nodes.Text002.material}
          position={[-0.693, 0.138, -0.737]}
          scale={0.028}
        />
        <mesh
          name="Text003"
          castShadow
          receiveShadow
          geometry={nodes.Text003.geometry}
          material={nodes.Text003.material}
          position={[-0.6, 0.138, -0.737]}
          scale={0.028}
        />
        <mesh
          name="Text004"
          castShadow
          receiveShadow
          geometry={nodes.Text004.geometry}
          material={nodes.Text004.material}
          position={[-0.506, 0.138, -0.737]}
          scale={0.028}
        />
        <mesh
          name="Text005"
          castShadow
          receiveShadow
          geometry={nodes.Text005.geometry}
          material={nodes.Text005.material}
          position={[-0.414, 0.138, -0.737]}
          scale={0.028}
        />
        <mesh
          name="Text006"
          castShadow
          receiveShadow
          geometry={nodes.Text006.geometry}
          material={nodes.Text006.material}
          position={[-0.32, 0.138, -0.737]}
          scale={0.028}
        />
        <mesh
          name="Text007"
          castShadow
          receiveShadow
          geometry={nodes.Text007.geometry}
          material={nodes.Text007.material}
          position={[-0.226, 0.138, -0.737]}
          scale={0.028}
        />
        <mesh
          name="Text008"
          castShadow
          receiveShadow
          geometry={nodes.Text008.geometry}
          material={nodes.Text008.material}
          position={[-0.134, 0.138, -0.737]}
          scale={0.028}
        />
        <mesh
          name="Text009"
          castShadow
          receiveShadow
          geometry={nodes.Text009.geometry}
          material={nodes.Text009.material}
          position={[-0.041, 0.138, -0.737]}
          scale={0.028}
        />
        <mesh
          name="Text010"
          castShadow
          receiveShadow
          geometry={nodes.Text010.geometry}
          material={nodes.Text010.material}
          position={[0.059, 0.138, -0.737]}
          scale={0.028}
        />
        <mesh
          name="Text011"
          castShadow
          receiveShadow
          geometry={nodes.Text011.geometry}
          material={nodes.Text011.material}
          position={[0.149, 0.138, -0.737]}
          scale={0.028}
        />
        <mesh
          name="Text012"
          castShadow
          receiveShadow
          geometry={nodes.Text012.geometry}
          material={nodes.Text012.material}
          position={[0.245, 0.138, -0.737]}
          scale={0.028}
        />
        <mesh
          name="Text013"
          castShadow
          receiveShadow
          geometry={nodes.Text013.geometry}
          material={nodes.Text013.material}
          position={[0.349, 0.138, -0.737]}
          scale={0.028}
        />
        <mesh
          name="Text014"
          castShadow
          receiveShadow
          geometry={nodes.Text014.geometry}
          material={nodes.Text014.material}
          position={[0.441, 0.138, -0.737]}
          scale={0.028}
        />
        <mesh
          name="Text015"
          castShadow
          receiveShadow
          geometry={nodes.Text015.geometry}
          material={nodes.Text015.material}
          position={[0.541, 0.138, -0.737]}
          scale={0.028}
        />
        <mesh
          name="Text016"
          castShadow
          receiveShadow
          geometry={nodes.Text016.geometry}
          material={nodes.Text016.material}
          position={[0.638, 0.138, -0.736]}
          scale={0.024}
        />
        <mesh
          name="Text017"
          castShadow
          receiveShadow
          geometry={nodes.Text017.geometry}
          material={nodes.Text017.material}
          position={[0.724, 0.138, -0.736]}
          scale={0.024}
        />
        <mesh
          name="Text018"
          castShadow
          receiveShadow
          geometry={nodes.Text018.geometry}
          material={nodes.Text018.material}
          position={[0.812, 0.138, -0.733]}
          scale={0.024}
        />
        <mesh
          name="Text019"
          castShadow
          receiveShadow
          geometry={nodes.Text019.geometry}
          material={nodes.Text019.material}
          position={[0.898, 0.138, -0.733]}
          scale={0.024}
        />
        <mesh
          name="Text020"
          castShadow
          receiveShadow
          geometry={nodes.Text020.geometry}
          material={nodes.Text020.material}
          position={[-0.895, 0.139, -0.641]}
          scale={0.028}
        />
        <mesh
          name="Text021"
          castShadow
          receiveShadow
          geometry={nodes.Text021.geometry}
          material={nodes.Text021.material}
          position={[-0.806, 0.139, -0.639]}
          scale={0.028}
        />
        <mesh
          name="Text022"
          castShadow
          receiveShadow
          geometry={nodes.Text022.geometry}
          material={nodes.Text022.material}
          position={[-0.695, 0.139, -0.639]}
          scale={0.028}
        />
        <mesh
          name="Text023"
          castShadow
          receiveShadow
          geometry={nodes.Text023.geometry}
          material={nodes.Text023.material}
          position={[-0.589, 0.139, -0.637]}
          scale={0.028}
        />
        <mesh
          name="Text024"
          castShadow
          receiveShadow
          geometry={nodes.Text024.geometry}
          material={nodes.Text024.material}
          position={[-0.485, 0.139, -0.639]}
          scale={0.028}
        />
        <mesh
          name="Text025"
          castShadow
          receiveShadow
          geometry={nodes.Text025.geometry}
          material={nodes.Text025.material}
          position={[-0.377, 0.139, -0.638]}
          scale={0.028}
        />
        <mesh
          name="Text026"
          castShadow
          receiveShadow
          geometry={nodes.Text026.geometry}
          material={nodes.Text026.material}
          position={[-0.272, 0.139, -0.638]}
          scale={0.028}
        />
        <mesh
          name="Text027"
          castShadow
          receiveShadow
          geometry={nodes.Text027.geometry}
          material={nodes.Text027.material}
          position={[-0.166, 0.139, -0.638]}
          scale={0.028}
        />
        <mesh
          name="Text028"
          castShadow
          receiveShadow
          geometry={nodes.Text028.geometry}
          material={nodes.Text028.material}
          position={[-0.061, 0.139, -0.639]}
          scale={0.028}
        />
        <mesh
          name="Text029"
          castShadow
          receiveShadow
          geometry={nodes.Text029.geometry}
          material={nodes.Text029.material}
          position={[0.043, 0.139, -0.638]}
          scale={0.028}
        />
        <mesh
          name="Text030"
          castShadow
          receiveShadow
          geometry={nodes.Text030.geometry}
          material={nodes.Text030.material}
          position={[0.15, 0.139, -0.638]}
          scale={0.028}
        />
        <mesh
          name="Text031"
          castShadow
          receiveShadow
          geometry={nodes.Text031.geometry}
          material={nodes.Text031.material}
          position={[0.253, 0.139, -0.658]}
          scale={0.028}
        />
        <mesh
          name="Text032"
          castShadow
          receiveShadow
          geometry={nodes.Text032.geometry}
          material={nodes.Text032.material}
          position={[0.246, 0.139, -0.619]}
          scale={[0.058, 0.028, 0.028]}
        />
        <mesh
          name="Text033"
          castShadow
          receiveShadow
          geometry={nodes.Text033.geometry}
          material={nodes.Text033.material}
          position={[0.357, 0.139, -0.64]}
          scale={0.028}
        />
        <mesh
          name="Text034"
          castShadow
          receiveShadow
          geometry={nodes.Text034.geometry}
          material={nodes.Text034.material}
          position={[0.52, 0.139, -0.642]}
          scale={0.026}
        />
        <mesh
          name="Text035"
          castShadow
          receiveShadow
          geometry={nodes.Text035.geometry}
          material={nodes.Text035.material}
          position={[0.638, 0.139, -0.644]}
          scale={0.022}
        />
        <mesh
          name="Text036"
          castShadow
          receiveShadow
          geometry={nodes.Text036.geometry}
          material={nodes.Text036.material}
          position={[0.711, 0.139, -0.65]}
          scale={0.028}
        />
        <mesh
          name="Text037"
          castShadow
          receiveShadow
          geometry={nodes.Text037.geometry}
          material={nodes.Text037.material}
          position={[0.795, 0.139, -0.655]}
          scale={0.028}
        />
        <mesh
          name="Text038"
          castShadow
          receiveShadow
          geometry={nodes.Text038.geometry}
          material={nodes.Text038.material}
          position={[0.883, 0.139, -0.656]}
          scale={[0.058, 0.028, 0.028]}
        />
        <mesh
          name="Text039"
          castShadow
          receiveShadow
          geometry={nodes.Text039.geometry}
          material={nodes.Text039.material}
          position={[-0.882, 0.139, -0.544]}
          scale={0.028}
        />
        <mesh
          name="Text040"
          castShadow
          receiveShadow
          geometry={nodes.Text040.geometry}
          material={nodes.Text040.material}
          position={[-0.747, 0.139, -0.551]}
          scale={0.036}
        />
        <mesh
          name="Text041"
          castShadow
          receiveShadow
          geometry={nodes.Text041.geometry}
          material={nodes.Text041.material}
          position={[-0.638, 0.139, -0.554]}
          scale={0.036}
        />
        <mesh
          name="Text042"
          castShadow
          receiveShadow
          geometry={nodes.Text042.geometry}
          material={nodes.Text042.material}
          position={[-0.54, 0.139, -0.554]}
          scale={0.036}
        />
        <mesh
          name="Text043"
          castShadow
          receiveShadow
          geometry={nodes.Text043.geometry}
          material={nodes.Text043.material}
          position={[-0.433, 0.139, -0.554]}
          scale={0.036}
        />
        <mesh
          name="Text044"
          castShadow
          receiveShadow
          geometry={nodes.Text044.geometry}
          material={nodes.Text044.material}
          position={[-0.328, 0.139, -0.554]}
          scale={0.036}
        />
        <mesh
          name="Text045"
          castShadow
          receiveShadow
          geometry={nodes.Text045.geometry}
          material={nodes.Text045.material}
          position={[-0.222, 0.139, -0.554]}
          scale={0.036}
        />
        <mesh
          name="Text046"
          castShadow
          receiveShadow
          geometry={nodes.Text046.geometry}
          material={nodes.Text046.material}
          position={[-0.115, 0.139, -0.554]}
          scale={0.036}
        />
        <mesh
          name="Text047"
          castShadow
          receiveShadow
          geometry={nodes.Text047.geometry}
          material={nodes.Text047.material}
          position={[-0.017, 0.139, -0.554]}
          scale={0.036}
        />
        <mesh
          name="Text048"
          castShadow
          receiveShadow
          geometry={nodes.Text048.geometry}
          material={nodes.Text048.material}
          position={[0.096, 0.139, -0.554]}
          scale={0.036}
        />
        <mesh
          name="Text049"
          castShadow
          receiveShadow
          geometry={nodes.Text049.geometry}
          material={nodes.Text049.material}
          position={[0.199, 0.139, -0.554]}
          scale={0.036}
        />
        <mesh
          name="Text050"
          castShadow
          receiveShadow
          geometry={nodes.Text050.geometry}
          material={nodes.Text050.material}
          position={[0.299, 0.139, -0.534]}
          scale={[0.02, 0.036, 0.02]}
        />
        <mesh
          name="Text051"
          castShadow
          receiveShadow
          geometry={nodes.Text051.geometry}
          material={nodes.Text051.material}
          position={[0.406, 0.139, -0.534]}
          scale={[0.02, 0.036, 0.02]}
        />
        <mesh
          name="Text052"
          castShadow
          receiveShadow
          geometry={nodes.Text052.geometry}
          material={nodes.Text052.material}
          position={[0.512, 0.139, -0.534]}
          scale={[0.023, 0.041, 0.023]}
        />
        <mesh
          name="Text053"
          castShadow
          receiveShadow
          geometry={nodes.Text053.geometry}
          material={nodes.Text053.material}
          position={[0.622, 0.139, -0.553]}
          scale={[0.037, 0.067, 0.037]}
        />
        <mesh
          name="Text054"
          castShadow
          receiveShadow
          geometry={nodes.Text054.geometry}
          material={nodes.Text054.material}
          position={[0.71, 0.139, -0.553]}
          scale={[0.037, 0.067, 0.037]}
        />
        <mesh
          name="Text055"
          castShadow
          receiveShadow
          geometry={nodes.Text055.geometry}
          material={nodes.Text055.material}
          position={[0.797, 0.139, -0.553]}
          scale={[0.037, 0.067, 0.037]}
        />
        <mesh
          name="Text056"
          castShadow
          receiveShadow
          geometry={nodes.Text056.geometry}
          material={nodes.Text056.material}
          position={[0.884, 0.139, -0.485]}
          scale={[0.037, 0.067, 0.037]}
        />
        <mesh
          name="Text057"
          castShadow
          receiveShadow
          geometry={nodes.Text057.geometry}
          material={nodes.Text057.material}
          position={[0.9, 0.139, -0.277]}
          scale={[0.023, 0.042, 0.023]}
        />
        <mesh
          name="Text058"
          castShadow
          receiveShadow
          geometry={nodes.Text058.geometry}
          material={nodes.Text058.material}
          position={[-0.86, 0.139, -0.434]}
          scale={0.028}
        />
        <mesh
          name="Text059"
          castShadow
          receiveShadow
          geometry={nodes.Text059.geometry}
          material={nodes.Text059.material}
          position={[-0.718, 0.139, -0.448]}
          scale={0.036}
        />
        <mesh
          name="Text060"
          castShadow
          receiveShadow
          geometry={nodes.Text060.geometry}
          material={nodes.Text060.material}
          position={[-0.615, 0.139, -0.448]}
          scale={0.036}
        />
        <mesh
          name="Text061"
          castShadow
          receiveShadow
          geometry={nodes.Text061.geometry}
          material={nodes.Text061.material}
          position={[-0.503, 0.139, -0.448]}
          scale={0.036}
        />
        <mesh
          name="Text062"
          castShadow
          receiveShadow
          geometry={nodes.Text062.geometry}
          material={nodes.Text062.material}
          position={[-0.404, 0.139, -0.448]}
          scale={0.036}
        />
        <mesh
          name="Text063"
          castShadow
          receiveShadow
          geometry={nodes.Text063.geometry}
          material={nodes.Text063.material}
          position={[-0.294, 0.139, -0.448]}
          scale={0.036}
        />
        <mesh
          name="Text064"
          castShadow
          receiveShadow
          geometry={nodes.Text064.geometry}
          material={nodes.Text064.material}
          position={[-0.189, 0.139, -0.448]}
          scale={0.036}
        />
        <mesh
          name="Text065"
          castShadow
          receiveShadow
          geometry={nodes.Text065.geometry}
          material={nodes.Text065.material}
          position={[-0.089, 0.139, -0.448]}
          scale={[0.03, 0.03, 0.028]}
        />
        <mesh
          name="Text066"
          castShadow
          receiveShadow
          geometry={nodes.Text066.geometry}
          material={nodes.Text066.material}
          position={[0.023, 0.139, -0.448]}
          scale={0.036}
        />
        <mesh
          name="Text067"
          castShadow
          receiveShadow
          geometry={nodes.Text067.geometry}
          material={nodes.Text067.material}
          position={[0.126, 0.139, -0.448]}
          scale={0.036}
        />
        <mesh
          name="Text068"
          castShadow
          receiveShadow
          geometry={nodes.Text068.geometry}
          material={nodes.Text068.material}
          position={[0.225, 0.139, -0.432]}
          scale={0.033}
        />
        <mesh
          name="Text069"
          castShadow
          receiveShadow
          geometry={nodes.Text069.geometry}
          material={nodes.Text069.material}
          position={[0.332, 0.139, -0.437]}
          scale={0.033}
        />
        <mesh
          name="Text071"
          castShadow
          receiveShadow
          geometry={nodes.Text071.geometry}
          material={nodes.Text071.material}
          position={[0.543, 0.139, -0.436]}
          scale={0.026}
        />
        <mesh
          name="Text070"
          castShadow
          receiveShadow
          geometry={nodes.Text070.geometry}
          material={nodes.Text070.material}
          position={[0.544, 0.139, -0.336]}
          scale={0.026}
        />
        <mesh
          name="Text072"
          castShadow
          receiveShadow
          geometry={nodes.Text072.geometry}
          material={nodes.Text072.material}
          position={[0.621, 0.139, -0.449]}
          scale={[0.037, 0.067, 0.037]}
        />
        <mesh
          name="Text073"
          castShadow
          receiveShadow
          geometry={nodes.Text073.geometry}
          material={nodes.Text073.material}
          position={[0.621, 0.139, -0.448]}
          scale={[0.037, 0.067, 0.037]}
        />
        <mesh
          name="Text074"
          castShadow
          receiveShadow
          geometry={nodes.Text074.geometry}
          material={nodes.Text074.material}
          position={[0.621, 0.139, -0.344]}
          scale={[0.037, 0.067, 0.037]}
        />
        <mesh
          name="Text075"
          castShadow
          receiveShadow
          geometry={nodes.Text075.geometry}
          material={nodes.Text075.material}
          position={[0.71, 0.139, -0.449]}
          scale={[0.037, 0.067, 0.037]}
        />
        <mesh
          name="Text076"
          castShadow
          receiveShadow
          geometry={nodes.Text076.geometry}
          material={nodes.Text076.material}
          position={[0.71, 0.139, -0.346]}
          scale={[0.037, 0.067, 0.037]}
        />
        <mesh
          name="Text077"
          castShadow
          receiveShadow
          geometry={nodes.Text077.geometry}
          material={nodes.Text077.material}
          position={[0.798, 0.139, -0.451]}
          scale={[0.037, 0.067, 0.037]}
        />
        <mesh
          name="Text078"
          castShadow
          receiveShadow
          geometry={nodes.Text078.geometry}
          material={nodes.Text078.material}
          position={[0.797, 0.139, -0.347]}
          scale={[0.037, 0.067, 0.037]}
        />
        <mesh
          name="Text079"
          castShadow
          receiveShadow
          geometry={nodes.Text079.geometry}
          material={nodes.Text079.material}
          position={[0.621, 0.139, -0.24]}
          scale={[0.037, 0.067, 0.037]}
        />
        <mesh
          name="Text080"
          castShadow
          receiveShadow
          geometry={nodes.Text080.geometry}
          material={nodes.Text080.material}
          position={[0.824, 0.139, -0.202]}
          scale={[0.015, 0.028, 0.015]}
        />
        <mesh
          name="Text081"
          castShadow
          receiveShadow
          geometry={nodes.Text081.geometry}
          material={nodes.Text081.material}
          position={[0.737, 0.139, -0.202]}
          scale={[0.015, 0.028, 0.015]}
        />
        <mesh
          name="Text082"
          castShadow
          receiveShadow
          geometry={nodes.Text082.geometry}
          material={nodes.Text082.material}
          position={[-0.872, 0.139, -0.334]}
          scale={0.028}
        />
        <mesh
          name="Text083"
          castShadow
          receiveShadow
          geometry={nodes.Text083.geometry}
          material={nodes.Text083.material}
          position={[-0.664, 0.139, -0.344]}
          scale={0.036}
        />
        <mesh
          name="Text084"
          castShadow
          receiveShadow
          geometry={nodes.Text084.geometry}
          material={nodes.Text084.material}
          position={[-0.556, 0.139, -0.344]}
          scale={0.036}
        />
        <mesh
          name="Text085"
          castShadow
          receiveShadow
          geometry={nodes.Text085.geometry}
          material={nodes.Text085.material}
          position={[-0.452, 0.139, -0.344]}
          scale={0.036}
        />
        <mesh
          name="Text086"
          castShadow
          receiveShadow
          geometry={nodes.Text086.geometry}
          material={nodes.Text086.material}
          position={[-0.347, 0.139, -0.344]}
          scale={0.036}
        />
        <mesh
          name="Text087"
          castShadow
          receiveShadow
          geometry={nodes.Text087.geometry}
          material={nodes.Text087.material}
          position={[-0.241, 0.139, -0.344]}
          scale={0.036}
        />
        <mesh
          name="Text088"
          castShadow
          receiveShadow
          geometry={nodes.Text088.geometry}
          material={nodes.Text088.material}
          position={[-0.133, 0.139, -0.344]}
          scale={0.036}
        />
        <mesh
          name="Text089"
          castShadow
          receiveShadow
          geometry={nodes.Text089.geometry}
          material={nodes.Text089.material}
          position={[-0.027, 0.139, -0.344]}
          scale={0.036}
        />
        <mesh
          name="Text090"
          castShadow
          receiveShadow
          geometry={nodes.Text090.geometry}
          material={nodes.Text090.material}
          position={[0.072, 0.139, -0.332]}
          scale={0.033}
        />
        <mesh
          name="Text091"
          castShadow
          receiveShadow
          geometry={nodes.Text091.geometry}
          material={nodes.Text091.material}
          position={[0.176, 0.139, -0.333]}
          scale={0.033}
        />
        <mesh
          name="Text092"
          castShadow
          receiveShadow
          geometry={nodes.Text092.geometry}
          material={nodes.Text092.material}
          position={[0.281, 0.139, -0.329]}
          scale={0.028}
        />
        <mesh
          name="Text093"
          castShadow
          receiveShadow
          geometry={nodes.Text093.geometry}
          material={nodes.Text093.material}
          position={[-0.875, 0.139, -0.225]}
          scale={0.028}
        />
        <mesh
          name="Text094"
          castShadow
          receiveShadow
          geometry={nodes.Text094.geometry}
          material={nodes.Text094.material}
          position={[-0.767, 0.139, -0.225]}
          scale={0.028}
        />
        <mesh
          name="Text095"
          castShadow
          receiveShadow
          geometry={nodes.Text095.geometry}
          material={nodes.Text095.material}
          position={[-0.552, 0.139, -0.225]}
          scale={0.028}
        />
        <mesh
          name="Text096"
          castShadow
          receiveShadow
          geometry={nodes.Text096.geometry}
          material={nodes.Text096.material}
          position={[0.081, 0.139, -0.225]}
          scale={0.028}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/Lenovo LOQ.glb');

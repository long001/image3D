attribute vec4 a_position;
varying vec3 v_normal;
uniform mat4 u_matrix;
void main(){
    gl_Position=u_matrix * a_position;
    // 因为位置是以几何中心为原点的,可以用顶点坐标作为法向量
    v_normal=normalize(a_position.xyz);
}

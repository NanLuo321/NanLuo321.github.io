#version 300 es
void main(){ vec2 v = vec2((gl_VertexID<<1)&2, gl_VertexID&1);
  gl_Position = vec4(v*2.0-1.0, 0.0, 1.0); }
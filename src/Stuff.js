import React, { Component } from "react";
 
class Stuff extends Component {
  render() {
    return (
      <div>
        <h2>About</h2>
        <h1> Shriti Chandra </h1>
        <ul>
        <li> Sophomore Undergrad</li>
        <li> Google SoD'2020 intern with <a href="https://www.cncf.io/">CNCF</a></li>
        <li> Intern with <a href="https://layer5.io/">Layer5</a></li>
        <li> Enthusiastic about opensource, coding, writing, blogging and books.</li>
        <li> Hit me up for collaborations and projects!</li>
        </ul>
       
       <h3> Major Projects </h3>
       <ol>
    <li>Created the <a href="Creating the Service Mesh Performance Specification (SMPS) project site from scratch: ">Service Mesh Performance Specification</a> (SMPS) project site from scratch. To be showcased in the CNCF Kubecon Europe 2020 meet.</li>
    <li>Researched, wrote and sourced the <a href="https://docs.videolan.me/vlc-user/3.0/en/reference/os_compatibility.html">OS compatibility</a> and the <a href="https://docs.videolan.me/vlc-user/3.0/en/gettingstarted/setup/linux/archlinux.html">archlinux</a> feature documentation using Sphinx and rST for VLC Media Player (VideoLAN community). </li>
       </ol>
      Check out my consolidated <a href="https://chandrashritii.github.io/blog/portfolio/">portfolio.</a>  
      </div>
    );
  }
}
 
export default Stuff;
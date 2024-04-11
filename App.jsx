import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Dropdown } from 'bootstrap';

function Home() {
  useEffect(() => {
    var dropdownToggleList = [].slice.call(document.querySelectorAll('[data-bs-toggle="dropdown"]'));
    dropdownToggleList.map(function (dropdownToggle) {
      return new Dropdown(dropdownToggle);
    });
  }, []);
  return (
    <div>
   <div id="nav">
        <h1>Operating Systems Algorithms</h1></div>
    <div class="contain">
    <div class="container">
        <div class="row mb-8 pt-4">
          <div class="col-md-3">
            <div class="card h-100 d-flex flex-column justify-content-between ">
                <img class="card-img-top img-fluid" style={{ height: "150px", objectFit: "cover"}} src="https://static.javatpoint.com/operating-system/images/system-calls-in-operating-system.png" alt="Card cap"/>
                <div class="card-body">
                  <h5 class="card-title">System Calls</h5>
                  <p class="card-text">System calls are the interface through which user-level processes communicate with the kernel.</p>
                  <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      View Codes
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end" style={{ zIndex: 1000 }} >
                      <li><Link class="dropdown-item"  to="/Mod3_read_from">Action</Link></li>
                      <li><Link class="dropdown-item"  to="/Mod3_read_from">Another action</Link></li>
                      <li><Link class="dropdown-item"  to="/Mod3_read_from">Something else here</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
          </div>
          <div class="col-md-3">
            <div class="card h-100 d-flex flex-column justify-content-between" >
                <img class="card-img-top img-fluid" style={{ height: "150px", objectFit: "cover"}} src="https://afteracademy.com/images/process-scheduling-algorithms-in-the-operating-system-banner.png"  alt="Card cap"/>
                <div class="card-body">
                  <h5 class="card-title">Process Scheduling</h5>
                  <p class="card-text">Process scheduling algorithms determine the order in which processes are executed by the CPU, optimizing resource utilization and system performance.</p>
                  <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      View Codes
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end" style={{ zIndex: 1000 }}>
                      <li><Link class="dropdown-item "   >FCFS</Link></li>
                      <li><Link class="dropdown-item"  to="/Mod3_read_from" >SJF</Link></li>
                      <li><Link class="dropdown-item"  to="/Mod3_read_from" >PRIORITY</Link></li>
                      <li><Link class="dropdown-item"  to="/Mod3_read_from" >ROUND ROBIN</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
          </div>
          <div class="col-md-3">
            <div class="card h-100 d-flex flex-column justify-content-between">
                <img class="card-img-top img-fluid" style={{ height: "150px", objectFit: "cover"}} src="https://image.slidesharecdn.com/communicationsection123-150610092456-lva1-app6891/95/interprocess-communication-in-distributed-systems-1-638.jpg?cb=1433928387"  alt="Card cap"/>
                <div class="card-body d-flex flex-column justify-content-between">
                    <h5 class="card-title">Inter Process Communication</h5>
                    <p class="card-text">Inter-process communication enables different processes to exchange data and synchronize their actions within a computer system.</p>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            View Codes
                        </button>
                        <ul class="dropdown-menu" >
                            <li><Link class="dropdown-item"  to="/Mod3_read_from">READ-FROM</Link></li>
                            <li><Link class="dropdown-item"  to="/Mod3_write_into">WRITE-INTO</Link></li>
                            <li><Link class="dropdown-item"  to="/Mod3_read_queue">READ-MESSAGE-QUEUE</Link></li>
                            <li><Link class="dropdown-item"  to="/Mod3_write_queue">WRITE-MESSAGE-QUEUE</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
          <div class="col-md-3">
            <div class="card h-100 d-flex flex-column justify-content-between">
                <img class="card-img-top img-fluid" style={{ height: "150px", objectFit: "cover"}} src="https://media.istockphoto.com/photos/semaphore-picture-id183963623?k=6&m=183963623&s=612x612&w=0&h=MWuaUheJzavWHX6U4oQoJ6vbJ9AgdVyBxnzE9KHE1Qs="  alt="Card cap"/>
                <div class="card-body">
                  <h5 class="card-title">Semaphores</h5>
                  <p class="card-text">Semaphores are synchronization primitives used in concurrent programming to control access to shared resources.</p>
                  <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      View Codes
                    </button>
                    <ul class="dropdown-menu" >
                      <li><Link class="dropdown-item"  to="/Mod3_read_from">READER-WRITER</Link></li>
                      <li><Link class="dropdown-item"  to="/Mod3_read_from">PRODUCER-CONSUMER</Link></li>
                      <li><Link class="dropdown-item"  to="/Mod3_read_from">DINING PHILOSOPHER</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div class="row mb-8 mt-4 pt-4">
            <div class="col-md-3">
                <div class="card h-100 d-flex flex-column justify-content-between">
                    <img class="card-img-top" src="https://th.bing.com/th/id/OIP.ibzZRYELB0VbtxM99VayFgHaFW?rs=1&pid=ImgDetMain"  alt="Card cap"/>
                    <div class="card-body">
                      <h5 class="card-title">Deadlock</h5>
                      <p class="card-text">Deadlock management involves preventing or resolving conflicts between processes competing for shared resources to avoid system gridlock.</p>
                      
                    <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      View Codes
                    </button>
                    <ul class="dropdown-menu" >
                      <li><Link class="dropdown-item"  to="/Mod3_read_from">DEADLOCK-DETECTION</Link></li>
                      <li><Link class="dropdown-item"  to="/Mod3_read_from">DEADLOCK-AVOIDANCE</Link></li>
                    </ul>
                  </div>
                    </div>
                  </div>
            </div>
            <div class="col-md-3">
                <div class="card h-100 d-flex flex-column justify-content-between">
                    <img class="card-img-top" src="https://miro.medium.com/v2/resize:fit:1024/1*7vZET7oOSbG-QIb8cT0evQ.jpeg"  alt="Card cap"/>
                    <div class="card-body">
                      <h5 class="card-title">Memory Management Techniques</h5>
                      <p class="card-text">Memory management techniques involve strategies for efficiently allocating and deallocating memory resources to optimize system performance.</p>
                      
                    <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      View Codes
                    </button>
                    <ul class="dropdown-menu" >
                      <li><Link class="dropdown-item"  to="/Mod3_read_from">MFT</Link></li>
                      <li><Link class="dropdown-item"  to="/Mod3_read_from">MVT</Link></li>
                    </ul>
                  </div>
                    </div>
                  </div>
            </div>
            <div class="col-md-3">
                <div class="card h-100 d-flex flex-column justify-content-between" >
                    <img class="card-img-top" src="https://th.bing.com/th/id/OIP.G10rUSwV9Vsj6Orl7TnTpAAAAA?rs=1&pid=ImgDetMain"  alt="Card cap"/>
                    <div class="card-body">
                      <h5 class="card-title">Memory Allocation Techniques</h5>
                      <p class="card-text">Memory allocation techniques determine how computer memory is assigned to different programs or processes, optimizing resource utilization and performance.</p>
                      
                    <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      View Codes
                    </button>
                    <ul class="dropdown-menu" >
                      <li><Link class="dropdown-item"  to="/Mod3_read_from">FIRST-FIT</Link></li>
                      <li><Link class="dropdown-item"  to="/Mod3_read_from">BEST-FIT</Link></li>
                      <li><Link class="dropdown-item"  to="/Mod3_read_from">WORST-FIT</Link></li>
                      <li><Link class="dropdown-item"  to="/Mod3_read_from" >NEXT-FIT</Link></li>
                      <li><Link class="dropdown-item"  to="/Mod3_read_from" >PAGING</Link></li>
                      <li><Link class="dropdown-item"  to="/Mod3_read_from" >SEGMENTATION</Link></li>
                      <li><Link class="dropdown-item"  to="/Mod3_read_from" >BUDDY MANAGEMENT SYSTEM</Link></li>
                    </ul>
                  </div>
                    </div>
                  </div>
            </div>
            <div class="col-md-3">
                <div class="card h-100 d-flex flex-column justify-content-between">
                    <img class="card-img-top" src="https://th.bing.com/th/id/OIP.AA_7Gmh210QLg0bz3h1cNwHaEK?rs=1&pid=ImgDetMain"  alt="Card cap"/>
                    <div class="card-body">
                      <h5 class="card-title">Page Replacement Algorithms</h5>
                      <p class="card-text">Page replacement algorithms are crucial in managing memory in computer systems by determining which page to evict when new pages need to be brought in.</p>
                      
                    <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      View Codes
                    </button>
                    <ul class="dropdown-menu" >
                      <li><Link class="dropdown-item"  to="/Mod3_read_from">FIFO</Link></li>
                      <li><Link class="dropdown-item"  to="/Mod3_read_from">LRU</Link></li>
                      <li><Link class="dropdown-item"  to="/Mod3_read_from">LFU</Link></li>
                      <li><Link class="dropdown-item"  to="/Mod3_read_from" >MFU</Link></li>
                      <li><Link class="dropdown-item"  to="/Mod3_read_from" >MRU</Link></li>
                      <li><Link class="dropdown-item"  to="/Mod3_read_from" >OPTIMAL</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row mb-8 mt-4 pt-4 pb-4">
            <div class="col-md-3">
                <div class="card h-100 d-flex flex-column justify-content-between">
                    <img class="card-img-top" src="https://i.ytimg.com/vi/oRgX6ixIipU/maxresdefault.jpg"  alt="Card cap"/>
                    <div class="card-body">
                      <h5 class="card-title">Disc Scheduling Algorithms</h5>
                      <p class="card-text">Disk scheduling algorithms prioritize and optimize the order in which disk I/O requests are serviced to minimize seek time and maximize efficiency.</p>
                      
                    <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      View Codes
                    </button>
                    <ul class="dropdown-menu" >
                      <li><Link class="dropdown-item"  to="/Mod3_read_from">FCFS</Link></li>
                      <li><Link class="dropdown-item"  to="/Mod3_read_from">SCAN</Link></li>
                      <li><Link class="dropdown-item"  to="/Mod3_read_from">C-SCAN</Link></li>
                    </ul>
                  </div>
                    </div>
                  </div>
            </div>
            <div class="col-md-3">
                <div class="card h-100 d-flex flex-column justify-content-between">
                    <img class="card-img-top" src="https://th.bing.com/th/id/R.eb3350884f6c4ca7ab97b5a0ea0ec614?rik=TUtu7s5Tss6%2f1Q&riu=http%3a%2f%2fcourses.teresco.org%2fcs322_s08%2flectures%2flect29%2fdiskblocks-contig.jpg&ehk=RSSJ17HBP8%2fkfTXqk%2fR%2fx22rSt6ggtBdDTAT%2f%2b4%2frcY%3d&risl=&pid=ImgRaw&r=0"  alt="Card cap"/>
                    <div class="card-body">
                      <h5 class="card-title">File allocation Techniques</h5>
                      <p class="card-text">File allocation algorithms determine how files are stored on disk by allocating disk space to files efficiently.</p>
                      
                    <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      View Codes
                    </button>
                    <ul class="dropdown-menu" >
                      <li><Link class="dropdown-item"  to="/Mod3_read_from">SEQUENTIAL ALLOCATION</Link></li>
                      <li><Link class="dropdown-item"  to="/Mod3_read_from">LINKED LIST ALLOCATION</Link></li>
                      <li><Link class="dropdown-item"  to="/Mod3_read_from">INDEXED ALLOCATION</Link></li>
                    </ul>
                  </div>
                    </div>
                  </div>
            </div>
          </div>  
      </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>

    </div>
  );
}

export default Home;

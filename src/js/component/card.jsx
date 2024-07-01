import React from "react";

export function Card(){
    return(
      <div className=" m-5 row row-cols-1 row-cols-md-4 g-4">
      <div className="col">
        <div className="card h-100">
          <img src="https://www.webanimales.com/ficheros/2015/12/cat-450000_1280-500x325.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
          <div className="card-footer d-flex justify-content-center">
            <a href="#" class="btn btn-primary">Find Out More!</a>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src="https://tiempo.hn/wp-content/uploads/2021/01/proteinas-alimentos-500x325-1.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          </div>
          <div className="card-footer d-flex justify-content-center ">
            <a href="#" class="btn btn-primary " >Find Out More!</a>
          </div>
          
          
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQey-rYpWmqGrZCgBZyIFC17cwpxUvPMTHN0Q&s" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          </div>
          <div className="card-footer d-flex justify-content-center">
            <a href="#" class="btn btn-primary">Find Out More!</a>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM7PfMCrTLhG5agHLyrRSdr33ZGy8-ldSPJQ&s" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          </div>
          <div className="card-footer d-flex justify-content-center">
            <a href="#" class="btn btn-primary">Find Out More!</a>
          </div>
        </div>
      </div>
    </div>
    )
}

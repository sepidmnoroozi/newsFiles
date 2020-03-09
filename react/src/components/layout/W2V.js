import React, { Component } from "react";
import "/home/momtazi/Projects/news_tracker/web/my-app/src/App.css";
class W2V extends Component {
  constructor() {
    super();
    this.state = {
      news_list: [],
      search_keyword: ""
    };
  }
  async componentDidMount() {
    console.log("getting results... please wait")
    var result = await fetch("http://gw.ceit.aut.ac.ir:50052/api/news/w2vclusters", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    console.log("Yeeees got clusters");
    let jsonRes = await result.text();
    let finalResult = await JSON.parse(jsonRes);
    var searchnews = finalResult;
    await this.loadclusters(searchnews);
    
  }
  loadclusters = async a => {
    console.log("load clusters");
    console.log("len of a");
    console.log(a.length);
    // console.log("first type of cluster");
    // console.log(a[0].length);
    // console.log(a[0]);
    // console.log("first cluster");
    // console.log(a[0][0]);
    // console.log("news in this cluster");
    // console.log(a[0][0]["list"]);
    // console.log("second type of cluster");
    // console.log(a[1].length);
    // console.log(a[1]);
    // console.log("first cluster");
    // console.log(a[1][0]);
    // console.log("news in this cluster");
    // console.log(a[1][0]["list"]);

    var maindiv = document.getElementsByClassName("maindiv")[0];
    while (maindiv.hasChildNodes()) {
      maindiv.removeChild(maindiv.lastChild);
    }

      // console.log("there is news_container");
      // maindiv.removeChild(news_container);
    
    // var news_container = document.getElementsByClassName("news_container")[0];
    var news_clusters = document.createElement("div");
    news_clusters.className = "news_clusters";

    //sort a[i]ha
    

    for (let i = 0; i < a.length; i++) {
      var cluster_type = document.createElement("div");
      cluster_type.className = "news_item";
      cluster_type.innerHTML = "w2v clusters" + "\n";
      news_clusters.appendChild(cluster_type);
      var clusters = a[i];
      
      for (let j = 0; j < clusters.length; j++) {
        var cluster = document.createElement("div");
        cluster.className = "cluster";
        cluster.id = "cluster" + j;
        cluster.innerHTML = "this a cluster";

        var news_list = clusters[j]["list"];
        // console.log("cluster number" + j);
        // console.log(news_list.length);
        for (let k = 0; k < news_list.length; k++) {
          var news_item = document.createElement("div");
          news_item.className = "news_item";
          news_item.id = "item" + news_list[k][0];

          // var news_date = document.createElement("div");
          // news_date.className = "news_date";
          // news_date.innerHTML = news_list[k]["date"];

          var news_url = document.createElement("div");
          news_url.className = "news_url";
          news_url.innerHTML = news_list[k][0];

          var news_title = document.createElement("div");
          news_title.className = "news_title";
          news_title.innerHTML = "title : " + "\n\n\n" + news_list[k][1];

          var oda = document.createElement("a");
          oda.className = "show_text_butt";
          oda.id = news_list[k][0];
          oda.href = "/newsPage";
          oda.target="_blank";
          oda.onclick = this.reply_click;
          oda.innerHTML = "نمایش صفحه خبر";
          // var news_title = document.createElement("div");
          // news_title.className = "news_title";
          // news_title.innerHTML = news_list[k]["title"];

          // var news_summary_head = document.createElement("div");
          // news_summary_head.className = "news_summary_head";
          // news_summary_head.innerHTML = "This is summary";

          // var news_summary = document.createElement("div");
          // news_summary.className = "news_summary";
          // news_summary.innerHTML = news_list[k]["summary"];

          // var news_text_head = document.createElement("div");
          // news_text_head.className = "news_texty_head";
          // news_text_head.innerHTML = "This is Text";

          // var news_text = document.createElement("div");
          // news_text.className = "news_text";
          // news_text.innerHTML = news_list[k]["text"];

          // news_item.appendChild(news_date);
          news_item.appendChild(news_url);
          // if (news_list[k]["title"] != null) {
          news_item.appendChild(news_title);
          // }
          // if (news_list[k]["summary"] != null) {
          //   news_item.appendChild(news_summary_head);
          //   news_item.appendChild(news_summary);
          // }
          // if (news_list[k]["text"] != null) {
          //   news_item.appendChild(news_text_head);
          //   news_item.appendChild(news_text);
          // }
          news_item.appendChild(oda);
          cluster.appendChild(news_item);
        }
        news_clusters.appendChild(cluster);
      }
    }
    maindiv.appendChild(news_clusters);
  };

  reply_click = event => {
    // console.log(event.target.id);
    localStorage.setItem("newsid", event.target.id);
  };
  render() {
    return (
      <div className="maindiv">
        <div className="news_item">please wait</div>
      </div>
    );
  }
}

export default W2V;

// import React, { Component } from "react";
// import "/home/momtazi/Projects/news_tracker/web/my-app/src/App.css";
// class Allnewslist extends Component {
//   constructor() {
//     super();
//     this.state = {
//       news_list: []
//     };
//   }
//   async componentDidMount() {
//     await this.initilize_news();
//   }

//   initilize_news = async () => {
//     var result = await fetch("http://localhost:3002/api/news", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json"
//       }
//     });
//     // console.log(result);
//     let jsonRes = await result.text();
//     let finalResult = JSON.parse(jsonRes);
//     console.log(finalResult);
//     // var temp = [];
//     // let i = 0;
//     // for (i = 0; i < finalResult.length; i++) {
//     //   temp.push({
//     //     value: finalResult[i],
//     //     label: finalResult[i],
//     //     rating: "areas"
//     //   });
//     // }
//     this.setState({
//       news_list: finalResult
//     });

//     this.loadnews(finalResult);
//   };

//   loadnews(a) {
//     console.log("hiiiiiiiiiiiiiiiii");
//     var news_container = document.getElementsByClassName("news_container")[0];
//     while (news_container.hasChildNodes()) {
//       news_container.removeChild(news_container.lastChild);
//     }

//     var allnews = a;
//     console.log("num of news")
//     console.log(a.length)
//     for (let i = 0; i < allnews.length; i++) {
//       var news_item = document.createElement("div");
//       news_item.className = "news_item";
//       news_item.id = "item" + allnews[i]["url"];

//       var news_date = document.createElement("div");
//       news_date.className = "news_date";
//       news_date.innerHTML = allnews[i]["date"];

//       var news_url = document.createElement("div");
//       news_url.className = "news_url";
//       news_url.innerHTML = allnews[i]["url"];

//       var news_summary_head = document.createElement("div");
//       news_summary_head.className = "news_summary_head";
//       news_summary_head.innerHTML = "This is summary";

//       var news_summary = document.createElement("div");
//       news_summary.className = "news_summary";
//       news_summary.innerHTML = allnews[i]["summary"];

//       var news_text_head = document.createElement("div");
//       news_text_head.className = "news_texty_head";
//       news_text_head.innerHTML = "This is Text";

//       var news_text = document.createElement("div");
//       news_text.className = "news_text";
//       news_text.innerHTML = allnews[i]["text"];

//       var news_show_text = document.createElement("div");
//       news_show_text.className = "news_show_text";

//       var show_text_butt = document.createElement("button");
//       show_text_butt.className = "show_text_butt";
//       show_text_butt.id = allnews[i]["url"];
//       show_text_butt.innerHTML = "نمایش متن خبر";
//       show_text_butt.onclick = this.reply_click_show;

//       news_show_text.appendChild(show_text_butt);

//       news_item.appendChild(news_date);
//       news_item.appendChild(news_url);
//       if (allnews[i]["summary"] != null) {
//         news_item.appendChild(news_summary_head);
//         news_item.appendChild(news_summary);
//       }
//       // if (allnews[i]["text"] != null) {
//       //   news_item.appendChild(news_text_head);
//       //   news_item.appendChild(news_text);
//       // }
//       news_item.appendChild(news_show_text);
//       news_container.appendChild(news_item);
//     }
//   }
//   reply_click_show = event => {
//     var butt = event.target;
//     // console.log(butt);
//     // console.log(butt.id);
//     var butt_element = document.getElementById(butt.id);
//     var butt_div = butt_element.parentElement;
//     // console.log(butt_div);
//     while (butt_div.hasChildNodes()) {
//       butt_div.removeChild(butt_div.lastChild);
//     }
//     var allnews = this.state.news_list;
//     var index = 0;
//     for (let i = 0; i < allnews.length; i++) {
//       if (butt.id == allnews[i]["url"]) {
//         index = i;
//         break;
//       }
//     }
//     var news_item = document.getElementById("item" + butt.id);
//     while (news_item.hasChildNodes()) {
//       news_item.removeChild(news_item.lastChild);
//     }
//     var news_date = document.createElement("div");
//     news_date.className = "news_date";
//     news_date.innerHTML = allnews[index]["date"];

//     var news_url = document.createElement("div");
//     news_url.className = "news_url";
//     news_url.innerHTML = allnews[index]["url"];

//     var news_summary_head = document.createElement("div");
//     news_summary_head.className = "news_summary_head";
//     news_summary_head.innerHTML = "This is summary";

//     var news_summary = document.createElement("div");
//     news_summary.className = "news_summary";
//     news_summary.innerHTML = allnews[index]["summary"];

//     var news_text_head = document.createElement("div");
//     news_text_head.className = "news_texty_head";
//     news_text_head.innerHTML = "This is Text";

//     var news_text = document.createElement("div");
//     news_text.className = "news_text";
//     news_text.innerHTML = allnews[index]["text"];

//     var news_show_text = document.createElement("div");
//     news_show_text.className = "news_show_text";

//     var show_text_butt = document.createElement("button");
//     show_text_butt.className = "show_text_butt";
//     show_text_butt.id = allnews[index]["url"];
//     show_text_butt.innerHTML = "بستن متن خبر";
//     show_text_butt.onclick = this.reply_click_close;

//     news_show_text.appendChild(show_text_butt);

//     news_item.appendChild(news_date);
//     news_item.appendChild(news_url);
//     if (allnews[index]["summary"] != null) {
//       news_item.appendChild(news_summary_head);
//       news_item.appendChild(news_summary);
//     }
//     if (allnews[index]["text"] != null) {
//       news_item.appendChild(news_text_head);
//       news_item.appendChild(news_text);
//     }
//     news_item.appendChild(news_show_text);
//   };

//   reply_click_close = event => {
//     var butt = event.target;
//     // console.log(butt);
//     // console.log(butt.id);
//     var butt_element = document.getElementById(butt.id);
//     var butt_div = butt_element.parentElement;
//     // console.log(butt_div);
//     while (butt_div.hasChildNodes()) {
//       butt_div.removeChild(butt_div.lastChild);
//     }
//     var allnews = this.state.news_list;
//     var index = 0;
//     for (let i = 0; i < allnews.length; i++) {
//       if (butt.id == allnews[i]["url"]) {
//         index = i;
//         break;
//       }
//     }
//     var news_item = document.getElementById("item" + butt.id);
//     while (news_item.hasChildNodes()) {
//       news_item.removeChild(news_item.lastChild);
//     }
//     var news_date = document.createElement("div");
//     news_date.className = "news_date";
//     news_date.innerHTML = allnews[index]["date"];

//     var news_url = document.createElement("div");
//     news_url.className = "news_url";
//     news_url.innerHTML = allnews[index]["url"];

//     var news_summary_head = document.createElement("div");
//     news_summary_head.className = "news_summary_head";
//     news_summary_head.innerHTML = "This is summary";

//     var news_summary = document.createElement("div");
//     news_summary.className = "news_summary";
//     news_summary.innerHTML = allnews[index]["summary"];

//     var news_text_head = document.createElement("div");
//     news_text_head.className = "news_texty_head";
//     news_text_head.innerHTML = "This is Text";

//     var news_text = document.createElement("div");
//     news_text.className = "news_text";
//     news_text.innerHTML = allnews[index]["text"];

//     var news_show_text = document.createElement("div");
//     news_show_text.className = "news_show_text";

//     var show_text_butt = document.createElement("button");
//     show_text_butt.className = "show_text_butt";
//     show_text_butt.id = allnews[index]["url"];
//     show_text_butt.innerHTML = "نمایش متن خبر";
//     show_text_butt.onclick = this.reply_click_show;

//     news_show_text.appendChild(show_text_butt);

//     news_item.appendChild(news_date);
//     news_item.appendChild(news_url);
//     if (allnews[index]["summary"] != null) {
//       news_item.appendChild(news_summary_head);
//       news_item.appendChild(news_summary);
//     }
//     // if (allnews[index]["text"] != null) {
//     //   news_item.appendChild(news_text_head);
//     //   news_item.appendChild(news_text);
//     // }
//     news_item.appendChild(news_show_text);
//   };

//   render() {
//     return (
//       <div className="news_container">
//         <div className="news_item">
//           <div className="news_date">هاها</div>
//           <div className="news_url">هه هه</div>
//           <div className="news_summary">خلاصه خبر</div>
//           <div className="news_text">متن خبر اینجاس</div>
//           <div className="news_show_text">
//             <button className="show_text_butt" onClick={this.reply_click_show}>
//               نمایش متن خبر
//             </button>
//           </div>
//         </div>
//         <div className="news_item">
//           <div className="news_date">هاها</div>
//           <div className="news_url">هه هه</div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Allnewslist;

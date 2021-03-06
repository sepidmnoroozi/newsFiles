import React, { Component } from "react";
import "/home/momtazi/Projects/news_tracker/web/my-app/src/App.css";
class ElasticSearchComponent extends Component {
  constructor() {
    super();
    this.state = {
      news_list: [],
      search_keyword: ""
    };
  }
  async componentDidMount() {}

  loadSearchResults = async a => {
    console.log("loadSearchResults");
    var searchResultDiv = document.getElementById("searchResultDiv");
    while (searchResultDiv.hasChildNodes()) {
      searchResultDiv.removeChild(searchResultDiv.lastChild);
    }

    var news_item = document.createElement("div");
    news_item.className = "news_item";
    news_item.innerHTML =
      "برای عبارت مورد جست و جوی شما" + " " + a.length + " " + "نتیجه یافت شد";
    searchResultDiv.appendChild(news_item);

    for (let i = 0; i < a.length; i++) {
      var source = a[i]["_source"];

      var news_item = document.createElement("div");
      news_item.className = "news_item";
      news_item.id = "item" + source["url"];

      // var news_date = document.createElement("div");
      // news_date.className = "news_date";
      // news_date.innerHTML = source["date"];

      var news_url = document.createElement("div");
      news_url.className = "news_url";
      news_url.innerHTML = source["url"];

      var news_title = document.createElement("div");
      news_title.className = "news_title";
      news_title.innerHTML = "تیتر : " + "\n\n\n" + source["title"];

      // var news_summary_head = document.createElement("div");
      // news_summary_head.className = "news_summary_head";
      // news_summary_head.innerHTML = "This is summary";

      // var news_summary = document.createElement("div");
      // news_summary.className = "news_summary";
      // news_summary.innerHTML = source["summary"];

      // var news_text_head = document.createElement("div");
      // news_text_head.className = "news_texty_head";
      // news_text_head.innerHTML = "This is Text";

      // var news_text = document.createElement("div");
      // news_text.className = "news_text";
      // news_text.innerHTML = source["text"];

      var oda = document.createElement("a");
      oda.className = "show_text_butt";
      oda.id = source["url"];
      oda.href = "/newsPage";
      oda.target="_blank";
      oda.onclick = this.reply_click;

      oda.innerHTML = "نمایش صفحه خبر";

      // news_item.appendChild(news_date);
      news_item.appendChild(news_url);
      if (source["title"] != null) {
        news_item.appendChild(news_title);
      }
      // if (source["summary"] != null) {
      //   news_item.appendChild(news_summary_head);
      //   news_item.appendChild(news_summary);
      // }
      // if (source["text"] != null) {
      //   news_item.appendChild(news_text_head);
      //   news_item.appendChild(news_text);
      // }
      news_item.appendChild(oda);
      searchResultDiv.appendChild(news_item);
    }
  };

  reply_click = event => {
    // console.log(event.target.id);
    localStorage.setItem("newsid", event.target.id);
  };

  handleChange = event => {
    console.log("oomad to change");
    this.setState({ search_keyword: event.target.value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    console.log("oomad to submit");
    const data = { input: this.state.search_keyword };
    var result = await fetch("http://gw.ceit.aut.ac.ir:50052/documents/suggest/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    console.log("oooooooooo");
    let jsonRes = await result.text();
    let finalResult = await JSON.parse(jsonRes);
    console.log(finalResult);
    // console.log(finalResult.hits.hits);
    // console.log(finalResult.hits.total.value);
    var numofhits = finalResult.hits.total.value;
    if (numofhits > 0) {
      console.log("haaaaaaaaaaaaaaaaaaaaaaahhhhhhhhhhhhhhhhhhhh");
      await this.loadSearchResults(finalResult.hits.hits);
    } else {
      var searchResultDiv = document.getElementById("searchResultDiv");
      while (searchResultDiv.hasChildNodes()) {
        searchResultDiv.removeChild(searchResultDiv.lastChild);
      }
      var search_none = document.createElement("div");
      search_none.className = "news_item";
      search_none.innerHTML = "متاسفم خبری یافت نشد" + "\n";
      searchResultDiv.appendChild(search_none);
      console.log("Nothingggggggggggggggggggggggggggggggggggggg");
    }

    // await this.loadSearchResults(searchnews);
  };
  render() {
    return (
      <div id="mainDiv">
        <div id="inputSearchDiv">
          <form onSubmit={this.handleSubmit}>
            <label>
              Enter the key word:
              <input
                className="searchinput"
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div id="searchResultDiv"></div>
      </div>
    );
  }
}

export default ElasticSearchComponent;

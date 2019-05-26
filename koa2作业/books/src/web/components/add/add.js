import "./add.css";
const add = {
  init() {
    console.log('🍎init');
    xtag.create("x-add", class extends XTagElement {
      constructor() {
          super();
      }
      '::template(true)'() {
          return `<form>
          <div class="form-group">
            <label for="exampleInputPassword1">涔﹀悕</label>
            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="璇疯緭鍏ヤ功鍚?>
          </div>
          <div class="form-group">
            <label for="exampleInputFile">浣滆€?/label>
            <input class="form-control" type="text" id="exampleInputFile" placeholder="璇疯緭鍏ヤ綔鑰?>
          </div>
          <button  id="add-btn" class="btn btn-default">鎻愪氦</button>
        </form>`
      }
      'click::event'(e) {
          if (e.target.id == "add-btn") {
              alert("请求添加新闻")
          }
      }
  });
  }
}
export default add;
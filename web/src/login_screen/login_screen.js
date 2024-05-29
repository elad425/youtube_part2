
function login_screen() {
  return (
    <body>
      <div class="col-sm pr-5 pl-5 pt-5">
        <form>
          <div class="form-column">
            <div class="container-fluid">
              <div class="md-4 mb-3">
                <label for="validationDefault01">First name</label>
                <input type="text" class="form-control" id="validationDefault01" value="" required></input>
              </div>
              <div class="md-4 mb-3">
                <label for="validationDefault02">Last name</label>
                <input type="text" class="form-control" id="validationDefault02" value="" required></input>
              </div>
              <div class="md-4 mb-3">
                <label for="validationDefaultUsername">Email address</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroupPrepend2">@</span>
                  </div>
                  <input type="text" class="form-control" id="validationDefaultUsername" value="" aria-describedby="inputGroupPrepend2" required></input>
                </div>
              </div>
              <div class="form-group">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required></input>
                  <label class="form-check-label" for="invalidCheck2">
                    Agree to terms and conditions
                  </label>
                </div>
              </div>
              <button class="btn btn-danger" type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>

      <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    </body>

  );
}

export default login_screen;

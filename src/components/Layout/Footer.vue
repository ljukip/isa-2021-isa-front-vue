<template>
  <footer class="footer row">
    <div class="footerWrapper">
      <div class="footerLeftSide col-sm-6">
        <div class="logo-box">
          <img src="../../assets/images/logo-pharmacy.png" class="nav__logo" />
        </div>
        <p>
          We work in a friendly and efficient using the latest technologies and
          sharing our expertise to make a diagnosis and implement cutting-edge
          therapies.
        </p>
        <div class="socialMediaIconsFooter">
          <div><i class="fab fa-facebook-f"></i></div>
          <div><i class="fab fa-twitter"></i></div>
          <div><i class="fab fa-instagram-square"></i></div>
        </div>
        <p class="registerNewsletter">REGISTER NEWSLETTER</p>
        <div class="subscribe">
          <input
            placeholder="Enter your email here"
            class="subscribeInput"
            type="text"
          />
          <button class="subscribeBtn">SUBSCRIBE</button>
        </div>
      </div>
      <div class="footerRightSide col-sm-6">
        <div class="tweets col-sm-6">
          <p class="latestTweets">LATEST TWEETS</p>
          <div class="oneTweet">
            <span class="tweet">@medical</span>
            <span>
              Sweets and Bakers WordPress Theme' on @EnvatoMarket by
              themefore</span
            ><span class="tweetLink"> http://t.co/we8Kf0</span>
            <div class="tweetDate">- Thursday March 9, 2017</div>
          </div>
          <div class="oneTweet">
            <span class="tweet">@medical</span>
            <span>
              Sweets and Bakers WordPress Theme' on @EnvatoMarket by
              themefore</span
            ><span class="tweetLink"> http://t.co/we8Kf0</span>
            <div class="tweetDate">- Thursday March 9, 2017</div>
          </div>
          <div class="oneTweet">
            <span class="tweet">@medical</span>
            <span>
              Sweets and Bakers WordPress Theme' on @EnvatoMarket by
              themefore</span
            ><span class="tweetLink"> http://t.co/we8Kf0</span>
            <div class="tweetDate">- Thursday March 9, 2017</div>
          </div>
        </div>
        <div class="info col-sm-6">
          <p class="patientGuide">PATIENT GUIDE</p>
          <div class="infoLinks">
            <a href="#">Choosing a doctor</a>
            <a href="#">Health journals</a>
            <a href="#">Insurance converage</a>
            <a href="#">Talking to your doctor</a>
            <a href="#">Medikal error</a>
          </div>
          <div class="openingHours">
            <h3>OPENING HOURS</h3>
            <p class="time"><span>Mon to Fri</span> 8:00 am to 7:00pm</p>
            <p class="time"><span>Sun & Sat</span> 9:00 am to 5:00pm</p>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">&copy; 2021</div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss">
.footer {
  width: 100%;
  background: #212121;
  .footerWrapper {
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin: auto;
  }
  .footerLeftSide {
    padding: 50px 0;
    border-right: 1px solid #757575;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 26px;
    .logo-box {
      img {
        width: 4rem;
        margin-bottom: 30px;
      }
    }
    p {
      width: 90%;
      text-align: start;
      color: white;
      font-weight: 300;
      font-size: 0.9rem;
    }
    .socialMediaIconsFooter {
      display: flex;
      border-bottom: 1px solid #757575;
      width: 90%;
      margin-bottom: 20px;
      div {
        background-color: #151515;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 20px 15px 15px 0;
      }
      i {
        color: #757575;
        font-size: 0.6rem;
      }
    }

    .registerNewsletter {
      font-size: 1rem;
      margin-bottom: 15px;
    }
    .subscribe {
      width: 90%;
      input {
        background-color: rgba(255, 255, 255, 0.05);
        color: #fff;
        outline: none;
        border: 0;
        padding: 10px;
        width: 70%;
        // padding: 0 20px;
        border-right: none;
      }
      button {
        width: 30%;
        height: 100%;
        color: #696969;
        background-color: rgba(255, 255, 255, 0.1);
        text-transform: uppercase;
        border: none;
        // padding: 8px 20px;
        font-weight: bold;
      }
    }
  }
  .footerRightSide {
    display: flex;
    width: 50%;
    .tweets {
      border-right: 1px solid #757575;
      padding: 70px 25px;
      color: #fff;
      line-height: 26px;
      font-weight: 300;

      .latestTweets {
        font-size: 1.1rem;
        margin-bottom: 15px;
      }
      .oneTweet {
        font-size: 0.9rem;
        text-align: start;
        .tweet {
          color: #3dc5df;
        }
        .tweetLink {
          &:hover {
            color: #3dc5df;
            transition: 500ms;
            cursor: pointer;
          }
        }
        .tweetDate {
          display: inline-block;
          width: 100%;
          text-align: right;
          color: #757575;
          margin: 10px 0;
          font-size: 0.7rem;
        }
      }
    }

    .info {
      padding: 70px 25px;
      color: #fff;
      line-height: 26px;
      font-weight: 300;
      text-align: end;
      .patientGuide {
        font-size: 1.1rem;
        margin-bottom: 15px;
        letter-spacing: 2px;
      }
      .infoLinks {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        line-height: 30px;
        a {
          text-decoration: none;
          color: #757575;

          &:hover {
            color: white;
            transition: 500ms;
          }
        }
      }
      .openingHours {
        h3 {
          text-transform: uppercase;
          color: #fff;
          margin-top: 20px;
          font-size: 1.1rem;
          font-weight: 300;
        }
        p.time {
          margin-left: 10px;
          color: #757575;
          font-size: 0.9rem;
        }
        p span {
          color: #cbcbcb;
          line-height: 26px;
          font-weight: 400;
        }
      }
    }
  }
  .copyright {
    text-align: center;
    background: #1b1b1b;
    padding: 10px 0;
    font-size: 14px;
    color: #535353;
  }
}
</style>

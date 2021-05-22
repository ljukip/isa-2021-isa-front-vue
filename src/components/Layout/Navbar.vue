<template>
  <div>
    <div class="aboveHeader">
      <div class="welcome">
        <p>Welcome To Our Medical & Research Center</p>
      </div>
      <div class="socialMediaIconsHeader">
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-twitter"></i>
        <i class="fas fa-globe"></i>
        <i class="fab fa-instagram-square"></i>
      </div>
    </div>
    <nav class="nav">
      <div class="navWrapper">
        <div class="nav__logo-box">
          <img src="../../assets/images/logo-pharmacy.png" class="nav__logo" />
        </div>
        <div>
          <ul class="nav__list">
            <router-link
              class="nav__item"
              v-for="(link, index) in links"
              :to="link.path"
              :key="index"
            >
              {{ link.name }}
            </router-link>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import links from "../../constants/unregistred-user-links";

export default {
  name: "Navbar",
  data() {
    return {
      links,
    };
  },
};
</script>

<style lang="scss">
.aboveHeader {
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .welcome {
    p {
      font-size: 0.8em;
    }
  }
  .socialMediaIconsHeader {
    color: white;
    margin-left: 15px;

    i {
      padding: 12px 12px;
      background-color: rgb(26, 26, 26);
      &:hover {
        background-color: $color-primary;
        transition: 500ms;
        cursor: pointer;
      }
    }
  }
}
.nav {
  //

  border-top: 4px solid;
  border-image: linear-gradient(
      to right,
      orange 25%,
      rgb(97, 247, 252) 25% 50%,
      rgb(44, 210, 240) 50% 75%,
      rgb(11, 142, 165) 75% 100%
    )
    16;
  border-image-repeat: repeat;
  .navWrapper {
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.nav__logo {
  width: 3rem;
  padding-top: 20px;
}

.nav__list {
  display: flex;
  // justify-content: space-between;
  // width: 30%;

  .nav__item {
    color: white;
    padding: 10px 15px;
    text-decoration: none;
    font-weight: 300;
    text-transform: uppercase;

    //hover background change
    position: relative;
    z-index: 0;
    cursor: pointer;
    &:hover {
      color: black;
    }
    &:before {
      position: absolute;
      width: 0px;
      height: 100%;
      left: 0px;
      top: 0px;
      content: "";
      background-color: #fff;
      transition: all 0.3s;
      z-index: -10;
    }
    &:hover:before {
      width: 100%;
    }
  }
}

/* Pull left  */
// div.pullLeft a:before
// {
//     position: absolute;
//     width: 2px;
//     height: 100%;
//     right: 0px;
//     top: 0px;
//     content: '';
//     background: #FFF;
//     opacity: 0.3;
//     transition: all 0.3s;
// }

// div.pullLeft a:hover:before
// {
//     width: 100%;
// }
</style>

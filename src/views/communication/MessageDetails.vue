!<template>
  <article>
    <div class="container">
      <div class="main mx-3">
        <div class="row mt-lg-5">
          <div class="col-md-5 ml-md-5 mt-2">
            <h3 class="ml-md-5 lasikText">
              Lasik surgery frequently asked questions
            </h3>
          </div>
          <div class="col-md-4 d-md-flex smview1">
            <div class="d-flex mx-md-3">
              <button class="btn btn1 btn-outline-primary">
                Team
                <i class="fas fa-times icons px-2"></i>
              </button>
            </div>
            <div class="d-flex mx-md-3">
              <button class="btn btn2 btn-outline-primary">
                <i class="fas fa-times icons px-2"></i>
              </button>
            </div>
          </div>
          <div class="col-md-2 d-md-flex mx-md-2 ispa justify-content-end">
            <span
              ><i class="fas fa-long-arrow-alt-right icons mx-md-2"></i
            ></span>
            <span
              ><i class="fas fa-print icons mx-md-2" aria-hidden="true"></i
            ></span>
            <span
              ><i
                class="fas fa-trash icons mx-md-2 mr-md-3"
                aria-hidden="true"
              ></i
            ></span>
          </div>
        </div>

        <!-- Section two -->
        <div class="row mt-md-3 main2 shadow pt-md-3 mb-5 bg-white rounded">
          <div class="col-md-5 ml-lg-5 img mt-2">
            <img src="../../assets/add-member-big.svg" alt="" class="img" />
          </div>
          <div class="name">
            <h4 class="fw-bold">Molle Houston</h4>
            <p class="nam">To Me</p>
          </div>

          <div class="col-md-6 d-md-flex mt-3 justify-content-end">
            <p class="mx-4">May 8, 2018, 11:18 AM</p>
            <div class="icons">
              <span><i class="fas fa-star mx-2 icons"></i></span>
              <span><i class="fas fa-trash mx-2 icons"></i></span>
              <span><i class="fas fa-ellipsis-v mx-2 icons"></i></span>
            </div>
          </div>
          <div class="row d-md-flex flex-md-column mailText">
            <p class="mt-md-3 ptext">Hello Madam</p>
            <p class="mt-md-3 ptext">
              Thank you for such a good conversation.
              <br />
              <br />
              I learnt a lot from you. Let keep in touch
              <br />
              <br />
              Best Regards,
              <br />
              <br />
              Mollie.
            </p>
          </div>
        </div>

        <!-- section three -->
        <div class="row mt-md-3 main2 shadow pt-md-3 mb-5 bg-white rounded">
          <div class="col-md-5 ml-lg-5 img mt-2">
            <span
              ><i
                class="fas fa-long-arrow-alt-left 7x icons1 icons2 icons mx-md-2"
              ></i
              >A</span
            >
          </div>
          <div class="name">
            <h4 class="fw-bold">Molle Houston</h4>
          </div>

          <div class="row d-md-flex flex-md-column mailText mailtex3">
            <p class="mt-md-3 ptext">
              Sure i will get in touch and don't forget to
              <br />
              accept the skype request.
            </p>
            <p class="mt-md-3 ptext">
              Thank you.
              <br />
              <br />
              <span><i class="fas fa-ellipsis-h mx-2 icons"></i></span>
              <br />
              <br />
              Best Regards,
              <br />
              <br />
              Mollie.
            </p>
          </div>

          <button class="btn btnbase btnbase2 btn-outline-primary text-white">
            SEND
          </button>
        </div>

        <!-- <div class="row mt-md-n4 main3 shadow pt-md-3 mb-5 bg-white rounded">
          <div class="col-md-5 ml-lg-5 img mt-2">
           
          </div>
          <div class="name2">
            <h4 class="fw-bold">Molle Houston</h4>
            <p class="nam"></p>
            <p class="nam">
            
            </p>
            <br />
            <br />
            <p class="nam">
              
            </p>
            <p class="nam">Best Regards,</p>
            <p class="nam">Mollie</p>
            
          </div>
        </div> -->
      </div>
    </div>
  </article>
</template>

<script>
export default {};
</script>

<style scoped>
:root {
  --font-color: #02172e;
  --hrule-color: #708eb15c;
  --primary-color: #000000;
  --icons-color: #dde2e6;
}

.main2 {
  position: relative;
  height: 26rem;
}

.main3 {
  position: relative;
  height: 24rem;
}

.mailText {
  position: absolute;
  top: 8rem;
  left: 4.9rem;
}

.mailText2 {
  position: absolute;
  top: 4rem;
  left: 4.9rem;
}

.btn1,
.btn2 {
  width: 100px;
  height: 35px;
}

.btn1 {
  border: 1px solid #02172e;
  color: #02172e;
}

.img {
  width: 40px;
  height: 40px;
}

.name {
  display: inline-block;
  position: absolute;
  top: 2rem;
  left: 7.4rem;
}
.name2 {
  display: inline-block;
  position: absolute;
  top: 1.45rem;
  left: 7.4rem;
}

.nam {
  margin-left: -0.01rem;
}

article
  > div
  > div
  > div.row.mt-md-1.main3.shadow.pt-md-3.mb-5.bg-white.rounded
  > div.col-md-5.ml-lg-5.mt-2
  > h4 {
  margin: 0;
}

.icons {
  color: #dde2e6;
}

h3 {
  font-family: "Nunito Sans";
  font-size: 18px;
  color: var(--font-color);
}
p,
h5 {
  font-family: "Nunito Sans";
  font-size: 15px;
  margin-left: 3.5rem;
  color: var(--font-color);
}

.icon1 {
  font-size: 90px;
  font-weight: bolder;
}

.btnbase {
  position: absolute;
  width: 100px;
  height: 35px;
  background-color: #4285f4;
  top: 20.5rem;
  left: 4.7rem;
}

.mailtex3 {
  margin-top: -4rem;
}

article > div > div > div:nth-child(3) {
  margin-top: -4rem;
}

article > div > div > div:nth-child(3) > div.col-md-5.ml-lg-5.img.mt-2 {
  position: absolute;
  top: 1.6rem;
}

@media only screen and (max-width: 500px) {
  .smview1 {
    margin: 7px 5px;
    display: flex;
    flex-direction: row;
    position: relative;
    margin-bottom: 1rem;
  }

  .lasikText {
    margin-top: 10px;
    font-size: 13px;
  }

  .btn1,
  .btn2 {
    width: 100px;
    height: 35px;
  }

  .btn1 {
    margin: 0 0.5rem 0 -0.12rem;
  }

  .ispa {
    position: absolute;
    display: inline-block;
    top: 3.5rem;
    right: -15rem;
  }

  .img {
    margin-top: 1rem;
  }

  .name {
    margin-top: -0.1rem;
    margin-left: -3rem;
    font-weight: 400;
    font-size: 14px;
  }

  .img {
    width: 30px;
    height: 30px;
  }

  article
    > div
    > div
    > div.row.mt-md-3.main2.shadow.pt-md-3.mb-5.bg-white.rounded
    > div.name
    > h4 {
    font-size: 12px;
    margin-left: -1rem;
  }
  .nam {
    margin-left: -1rem;
    font-size: 12px;
  }

  article
    > div
    > div
    > div.row.mt-md-3.main2.shadow.pt-md-3.mb-5.bg-white.rounded
    > div.col-md-6.d-md-flex.mt-3.justify-content-end
    > p {
    position: absolute;
    top: -9.1rem;
    right: -0.5rem;
    margin: 0;
    font-size: 9px;
  }

  .icons {
    position: absolute;
    top: -8.4rem;
    right: 1.2rem;
  }

  .mailText {
    position: absolute;
    top: 8rem;
    left: 0.5rem;
  }

  .ptext {
    font-size: 11px;
  }

  .main2 {
    position: relative;
    height: 19rem;
  }

  .btnbase2 {
    position: absolute;
    top: 10rem;
  }

  .name2 {
    /* display: inline-block; */
    position: absolute;
    top: -1.2rem;
    left: -1rem;
  }

  .mailtex3 {
    margin-top: -4rem;
  }

  .btnbase2 {
    top: 15rem;
    left: 1rem;
  }

  .btnbase {
    width: 80px;
    height: 30px;
    background-color: #4285f4;
    padding: 0;
    font-size: 13px;
  }

  article > div > div > div:nth-child(3) > div.col-md-5.ml-lg-5.img.mt-2 {
    position: absolute;
    top: 1.2rem;
  }

  article > div > div > div:nth-child(3) {
    margin-top: -2.2rem;
  }
}
</style>

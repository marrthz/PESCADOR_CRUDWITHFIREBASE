var uniqueidV, firstnameV, middlenameV, surnameV, addressV, emailV;

function readFom() {
  uniqueidV = document.getElementById("uniqueid").value;
  firstnameV = document.getElementById("firstname").value;
  middlenameV = document.getElementById("middlename").value;
  surnameV = document.getElementById("surname").value;
  addressV = document.getElementById("address").value;
  emailV = document.getElementById("email").value;
  console.log(uniqueidV, firstnameV, middlenameV, surnameV, addressV, emailV);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + uniqueidV)
    .set({
      uniqueid: uniqueidV,
      firstname: firstnameV,
     middlename: middlenameV,
      surname: surnameV,
      address: addressV,
      email: emailV,
    });
    Swal.fire("Data Inserted!");
  document.getElementById("uniqueid").value = "";
  document.getElementById("firstname").value = "";
  document.getElementById("middlename").value = "";
  document.getElementById("surname").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
};

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + uniqueidV)
    .on("value", function (snap) {
      document.getElementById("uniqueid").value = snap.val().uniqueid;
      document.getElementById("firstname").value = snap.val().firstname;
      document.getElementById("middlename").value = snap.val().middlename;
      document.getElementById("surname").value = snap.val().surname;
      document.getElementById("address").value = snap.val().address;
      document.getElementById("email").value = snap.val().email;
    });
};

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + uniqueidV)
    .update({
      //   rollNo: rollV,
      uniqueid: uniqueidV,
      firstname: firstnameV,
      middlename: middlenameV,
      surname: surnameV,
      address: addressV,
      email: emailV,
    });
    Swal.fire("Data Updated!");
  document.getElementById("uniqueid").value = "";
  document.getElementById("firstname").value = "";
  document.getElementById("middlename").value = "";
  document.getElementById("surname").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
};
document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + uniqueidV)
    .remove();
    Swal.fire("Data Deleted!");
    document.getElementById("uniqueid").value = "";
    document.getElementById("firstname").value = "";
    document.getElementById("middlename").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("address").value = "";
    document.getElementById("email").value = "";
};

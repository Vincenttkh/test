function autofill(str) {

    //alert(str.value);
    //var TpKeyID = document.getElementById("TpKeyID_select").value;
    //alert(TpKeyID);
    document.getElementById("ULBeam").options.length = 0;
    document.getElementById("DLBeam").options.length = 0;

    $.ajax({
        type: "GET",
        url: "./tpdefinitionfunction.php",
        data: {
            "TpKeyID": "'" + str.value + "'",
            "action": 'autofill'
        },
        dataType: "json",
        success: function(rs) {

            //console.log(rs);
            if (rs.SatelliteName == 'null' && rs.SatelliteName == 'undefined') {
                document.getElementById("TpChState").value = "";
                document.getElementById("TpChAlt1").value = "";
            } else {
                //rs.MoveFirst();
                document.getElementById("TpChState").value = parseInt(rs.TpChState);
                document.getElementById("TpChAlt1").value = rs.TpChAlt1;

                if (rs.SatelliteName == "AsiaSat 4" && rs.TpType == "V" && rs.TpFreqBand == "Ku") {
                    var options = ["Australia", "China"];
                    var select = document.getElementById("ULBeam");

                    var a = document.createElement("option");
                    //a.textContent = "";
                    a.text = "";
                    a.value = "";
                    //select.appendChild(a);
                    select.add(a);

                    for (var i = 0; i < options.length; i++) {
                        var opt = options[i];
                        var el = document.createElement("option");
                        //el.textContent = opt;
                        el.text = opt;
                        el.value = opt;
                        //select.appendChild(el);
                        select.add(el);
                    }

                    select = document.getElementById("DLBeam");

                    var b = document.createElement("option");
                    //b.textContent = "";
                    b.text = "";
                    b.value = "";
                    //select.appendChild(b);
                    select.add(b);

                    for (var i = 0; i < options.length; i++) {
                        var opt = options[i];
                        var el = document.createElement("option");
                        //el.textContent = opt;
                        el.text = opt;
                        el.value = opt;
                        //select.appendChild(el);
                        select.add(el);
                    }
                } else if (rs.SatelliteName == "AsiaSat 5" && rs.TpFreqBand == "C") {
                    var options = ["Semi Global", "China"];
                    var select = document.getElementById("ULBeam");

                    var a = document.createElement("option");
                    //a.textContent = "";
                    a.text = "";
                    a.value = "";
                    //select.appendChild(a);
                    select.add(a);

                    for (var i = 0; i < options.length; i++) {
                        var opt = options[i];
                        var el = document.createElement("option");
                        //el.textContent = opt;
                        el.text = opt;
                        el.value = opt;
                        //select.appendChild(el);
                        select.add(el);
                    }
                } else if (rs.SatelliteName == "AsiaSat 5" && rs.TpType == "V" && rs.TpFreqBand == "Ku") {
                    var options = ["East Asia", "South Asia"];
                    var select = document.getElementById("ULBeam");

                    var a = document.createElement("option");
                    //a.textContent = "";
                    a.text = "";
                    a.value = "";
                    //select.appendChild(a);
                    select.add(a);

                    for (var i = 0; i < options.length; i++) {
                        var opt = options[i];
                        var el = document.createElement("option");
                        //el.textContent = opt;
                        el.text = opt;
                        el.value = opt;
                        //select.appendChild(el);
                        select.add(el);
                    }

                    select = document.getElementById("DLBeam");

                    var b = document.createElement("option");
                    //b.textContent = "";
                    b.text = "";
                    b.value = "";
                    //select.appendChild(b);
                    select.add(b);

                    for (var i = 0; i < options.length; i++) {
                        var opt = options[i];
                        var el = document.createElement("option");
                        //el.textContent = opt;
                        el.text = opt;
                        el.value = opt;
                        //select.appendChild(el);
                        select.add(el);
                    }
                } else if (rs.SatelliteName == "AsiaSat 5" && rs.TpType == "H" && rs.TpFreqBand == "Ku") {
                    if (parseInt(rs.TpNum) < 5) {
                        var options = ["Steerable"];
                        var select = document.getElementById("ULBeam");

                        var a = document.createElement("option");
                        //a.textContent = "";
                        a.text = "";
                        a.value = "";
                        //select.appendChild(a);
                        select.add(a);

                        for (var i = 0; i < options.length; i++) {
                            var opt = options[i];
                            var el = document.createElement("option");
                            //el.textContent = opt;
                            el.text = opt;
                            el.value = opt;
                            //select.appendChild(el);
                            select.add(el);
                        }

                        select = document.getElementById("DLBeam");

                        var b = document.createElement("option");
                        b.textContent = "";
                        b.value = "";
                        select.appendChild(b);

                        for (var i = 0; i < options.length; i++) {
                            var opt = options[i];
                            var el = document.createElement("option");
                            //el.textContent = opt;
                            el.text = opt;
                            el.value = opt;
                            //select.appendChild(el);
                            select.add(el);
                        }
                    } else {
                        var options = ["Steerable", "East Asia"];
                        var select = document.getElementById("ULBeam");

                        var a = document.createElement("option");
                        a.textContent = "";
                        a.value = "";
                        select.appendChild(a);

                        for (var i = 0; i < options.length; i++) {
                            var opt = options[i];
                            var el = document.createElement("option");
                            //el.textContent = opt;
                            el.text = opt;
                            el.value = opt;
                            //select.appendChild(el);
                            select.add(el);
                        }

                        select = document.getElementById("DLBeam");

                        var b = document.createElement("option");
                        //b.textContent = "";
                        b.text = "";
                        b.value = "";
                        //select.appendChild(b);
                        select.add(b);

                        for (var i = 0; i < options.length; i++) {
                            var opt = options[i];
                            var el = document.createElement("option");
                            //el.textContent = opt;
                            el.text = opt;
                            el.value = opt;
                            //select.appendChild(el);
                            select.add(el);
                        }
                    }
                } else if (rs.SatelliteName == "AsiaSat 7" && rs.TpType == "H" && rs.TpFreqBand == "Ku") {
                    var options = ["China", "South Asia"];
                    var select = document.getElementById("ULBeam");

                    var a = document.createElement("option");
                    //a.textContent = "";
                    a.text = "";
                    a.value = "";
                    //select.appendChild(a);
                    select.add(a);

                    for (var i = 0; i < options.length; i++) {
                        var opt = options[i];
                        var el = document.createElement("option");
                        //el.textContent = opt;
                        el.text = opt;
                        el.value = opt;
                        //select.appendChild(el);
                        select.add(el);
                    }

                    select = document.getElementById("DLBeam");

                    var b = document.createElement("option");
                    //b.textContent = "";
                    b.text = "";
                    b.value = "";
                    //select.appendChild(b);
                    select.add(b);

                    for (var i = 0; i < options.length; i++) {
                        var opt = options[i];
                        var el = document.createElement("option");
                        //el.textContent = opt;
                        el.text = opt;
                        el.value = opt;
                        //select.appendChild(el);
                        select.add(el);
                    }
                } else if (rs.SatelliteName == "AsiaSat 7" && rs.TpType == "V" && rs.TpFreqBand == "Ku") {
                    if (parseInt(rs.TpNum) < 5) {
                        var options = ["South Asia"];
                        var select = document.getElementById("ULBeam");

                        var a = document.createElement("option");
                        //a.textContent = "";
                        a.text = "";
                        a.value = "";
                        //select.appendChild(a);
                        select.add(a);

                        for (var i = 0; i < options.length; i++) {
                            var opt = options[i];
                            var el = document.createElement("option");
                            //el.textContent = opt;
                            el.text = opt;
                            el.value = opt;
                            //select.appendChild(el);
                            select.add(el);
                        }

                        select = document.getElementById("DLBeam");

                        var b = document.createElement("option");
                        b.textContent = "";
                        b.value = "";
                        select.appendChild(b);

                        for (var i = 0; i < options.length; i++) {
                            var opt = options[i];
                            var el = document.createElement("option");
                            //el.textContent = opt;
                            el.text = opt;
                            el.value = opt;
                            //select.appendChild(el);
                            select.add(el);
                        }
                    } else {
                        var options = ["Steerable", "South Asia"];
                        var select = document.getElementById("ULBeam");

                        var a = document.createElement("option");
                        a.textContent = "";
                        a.value = "";
                        select.appendChild(a);

                        for (var i = 0; i < options.length; i++) {
                            var opt = options[i];
                            var el = document.createElement("option");
                            //el.textContent = opt;
                            el.text = opt;
                            el.value = opt;
                            //select.appendChild(el);
                            select.add(el);
                        }

                        select = document.getElementById("DLBeam");

                        var b = document.createElement("option");
                        //b.textContent = "";
                        b.text = "";
                        b.value = "";
                        //select.appendChild(b);
                        select.add(b);

                        for (var i = 0; i < options.length; i++) {
                            var opt = options[i];
                            var el = document.createElement("option");
                            //el.textContent = opt;
                            el.text = opt;
                            el.value = opt;
                            //select.appendChild(el);
                            select.add(el);
                        }
                    }
                } else if (rs.SatelliteName == "AsiaSat 7" && rs.TpFreqBand == "Ku-ex") {
                    var options = ["Steerable"];
                    var select = document.getElementById("ULBeam");

                    var a = document.createElement("option");
                    //a.textContent = "";
                    a.text = "";
                    a.value = "";
                    //select.appendChild(a);
                    select.add(a);

                    for (var i = 0; i < options.length; i++) {
                        var opt = options[i];
                        var el = document.createElement("option");
                        //el.textContent = opt;
                        el.text = opt;
                        el.value = opt;
                        //select.appendChild(el);
                        select.add(el);
                    }

                    select = document.getElementById("DLBeam");

                    var b = document.createElement("option");
                    //b.textContent = "";
                    b.text = "";
                    b.value = "";
                    //select.appendChild(b);
                    select.add(b);

                    for (var i = 0; i < options.length; i++) {
                        var opt = options[i];
                        var el = document.createElement("option");
                        //el.textContent = opt;
                        el.text = opt;
                        el.value = opt;
                        //select.appendChild(el);
                        select.add(el);
                    }
                } else if (rs.SatelliteName == "AsiaSat 6" && rs.TpType == "V" && rs.TpFreqBand == "C") {
                    if (parseInt(rs.TpNum) < 3) {
                        var options = ["C-Band Semi-Global Receive Uplink", "C-Band Emergency Receive Uplink"];
                        var select = document.getElementById("ULBeam");

                        var a = document.createElement("option");
                        //a.textContent = "";
                        a.text = "";
                        a.value = "";
                        //select.appendChild(a);
                        select.add(a);

                        for (var i = 0; i < options.length; i++) {
                            var opt = options[i];
                            var el = document.createElement("option");
                            //el.textContent = opt;
                            el.text = opt;
                            el.value = opt;
                            //select.appendChild(el);
                            select.add(el);
                        }

                        select = document.getElementById("DLBeam");
                        options = ["Semi Global", "Regional"];

                        var b = document.createElement("option");
                        b.textContent = "";
                        b.value = "";
                        select.appendChild(b);

                        for (var i = 0; i < options.length; i++) {
                            var opt = options[i];
                            var el = document.createElement("option");
                            //el.textContent = opt;
                            el.text = opt;
                            el.value = opt;
                            //select.appendChild(el);
                            select.add(el);
                        }
                    } else {
                        var options = ["C-Band Semi-Global Receive Uplink", "C-Band Emergency Receive Uplink", "Ku-Band Emergency Receive Uplink"];
                        var select = document.getElementById("ULBeam");

                        var a = document.createElement("option");
                        a.textContent = "";
                        a.value = "";
                        select.appendChild(a);

                        for (var i = 0; i < options.length; i++) {
                            var opt = options[i];
                            var el = document.createElement("option");
                            //el.textContent = opt;
                            el.text = opt;
                            el.value = opt;
                            //select.appendChild(el);
                            select.add(el);
                        }

                        select = document.getElementById("DLBeam");
                        options = ["Semi Global", "Regional"];

                        var b = document.createElement("option");
                        //b.textContent = "";
                        b.text = "";
                        b.value = "";
                        //select.appendChild(b);
                        select.add(b);

                        for (var i = 0; i < options.length; i++) {
                            var opt = options[i];
                            var el = document.createElement("option");
                            //el.textContent = opt;
                            el.text = opt;
                            el.value = opt;
                            //select.appendChild(el);
                            select.add(el);
                        }
                    }
                } else if (rs.SatelliteName == "AsiaSat 6" && rs.TpType == "H" && rs.TpFreqBand == "C") {
                    if (parseInt(rs.TpNum) < 3) {
                        var options = ["C-Band Semi-Global Receive Uplink", "C-Band Emergency Receive Uplink"];
                        var select = document.getElementById("ULBeam");

                        var a = document.createElement("option");
                        //a.textContent = "";
                        a.text = "";
                        a.value = "";
                        //select.appendChild(a);
                        select.add(a);

                        for (var i = 0; i < options.length; i++) {
                            var opt = options[i];
                            var el = document.createElement("option");
                            //el.textContent = opt;
                            el.text = opt;
                            el.value = opt;
                            //select.appendChild(el);
                            select.add(el);
                        }

                        select = document.getElementById("DLBeam");
                        options = ["Semi Global"];

                        var b = document.createElement("option");
                        b.textContent = "";
                        b.value = "";
                        select.appendChild(b);

                        for (var i = 0; i < options.length; i++) {
                            var opt = options[i];
                            var el = document.createElement("option");
                            //el.textContent = opt;
                            el.text = opt;
                            el.value = opt;
                            //select.appendChild(el);
                            select.add(el);
                        }
                    } else {
                        var options = ["C-Band Semi-Global Receive Uplink", "C-Band Emergency Receive Uplink", "Ku-Band Emergency Receive Uplink"];
                        var select = document.getElementById("ULBeam");

                        var a = document.createElement("option");
                        a.textContent = "";
                        a.value = "";
                        select.appendChild(a);

                        for (var i = 0; i < options.length; i++) {
                            var opt = options[i];
                            var el = document.createElement("option");
                            //el.textContent = opt;
                            el.text = opt;
                            el.value = opt;
                            //select.appendChild(el);
                            select.add(el);
                        }

                        select = document.getElementById("DLBeam");
                        options = ["Semi Global"];

                        var b = document.createElement("option");
                        //b.textContent = "";
                        b.text = "";
                        b.value = "";
                        //select.appendChild(b);
                        select.add(b);

                        for (var i = 0; i < options.length; i++) {
                            var opt = options[i];
                            var el = document.createElement("option");
                            //el.textContent = opt;
                            el.text = opt;
                            el.value = opt;
                            //select.appendChild(el);
                            select.add(el);
                        }
                    }
                } else if (rs.SatelliteName == "AsiaSat 8" && rs.TpFreqBand == "Ku-CHN") {
                    var options = ["China", "India"];
                    var select = document.getElementById("ULBeam");

                    var a = document.createElement("option");
                    //a.textContent = "";
                    a.text = "";
                    a.value = "";
                    //select.appendChild(a);
                    select.add(a);

                    for (var i = 0; i < options.length; i++) {
                        var opt = options[i];
                        var el = document.createElement("option");
                        //el.textContent = opt;
                        el.text = opt;
                        el.value = opt;
                        //select.appendChild(el);
                        select.add(el);
                    }

                    select = document.getElementById("DLBeam");
                    var options = ["China"];

                    var b = document.createElement("option");
                    //b.textContent = "";
                    b.text = "";
                    b.value = "";
                    //select.appendChild(b);
                    select.add(b);

                    for (var i = 0; i < options.length; i++) {
                        var opt = options[i];
                        var el = document.createElement("option");
                        //el.textContent = opt;
                        el.text = opt;
                        el.value = opt;
                        //select.appendChild(el);
                        select.add(el);
                    }
                } else if (rs.SatelliteName == "AsiaSat 8" && rs.TpFreqBand == "Ku-IND1") {
                    var options = ["China", "India"];
                    var select = document.getElementById("ULBeam");

                    var a = document.createElement("option");
                    //a.textContent = "";
                    a.text = "";
                    a.value = "";
                    //select.appendChild(a);
                    select.add(a);

                    for (var i = 0; i < options.length; i++) {
                        var opt = options[i];
                        var el = document.createElement("option");
                        //el.textContent = opt;
                        el.text = opt;
                        el.value = opt;
                        //select.appendChild(el);
                        select.add(el);
                    }

                    select = document.getElementById("DLBeam");
                    var options = ["India"];

                    var b = document.createElement("option");
                    //b.textContent = "";
                    b.text = "";
                    b.value = "";
                    //select.appendChild(b);
                    select.add(b);

                    for (var i = 0; i < options.length; i++) {
                        var opt = options[i];
                        var el = document.createElement("option");
                        //el.textContent = opt;
                        el.text = opt;
                        el.value = opt;
                        //select.appendChild(el);
                        select.add(el);
                    }
                } else if (rs.SatelliteName == "AsiaSat 8" && rs.TpFreqBand == "Ku-IND2") {
                    var options = ["India"];
                    var select = document.getElementById("ULBeam");

                    var a = document.createElement("option");
                    //a.textContent = "";
                    a.text = "";
                    a.value = "";
                    //select.appendChild(a);
                    select.add(a);

                    for (var i = 0; i < options.length; i++) {
                        var opt = options[i];
                        var el = document.createElement("option");
                        //el.textContent = opt;
                        el.text = opt;
                        el.value = opt;
                        //select.appendChild(el);
                        select.add(el);
                    }

                    select = document.getElementById("DLBeam");

                    var b = document.createElement("option");
                    //b.textContent = "";
                    b.text = "";
                    b.value = "";
                    //select.appendChild(b);
                    select.add(b);

                    for (var i = 0; i < options.length; i++) {
                        var opt = options[i];
                        var el = document.createElement("option");
                        //el.textContent = opt;
                        el.text = opt;
                        el.value = opt;
                        //select.appendChild(el);
                        select.add(el);
                    }
                } else if (rs.SatelliteName == "AsiaSat 8" && rs.TpFreqBand == "Ku-ME-CA") {
                    var options = ["Central Asia", "South East Asia"];
                    var select = document.getElementById("ULBeam");

                    var a = document.createElement("option");
                    //a.textContent = "";
                    a.text = "";
                    a.value = "";
                    //select.appendChild(a);
                    select.add(a);

                    for (var i = 0; i < options.length; i++) {
                        var opt = options[i];
                        var el = document.createElement("option");
                        //el.textContent = opt;
                        el.text = opt;
                        el.value = opt;
                        //select.appendChild(el);
                        select.add(el);
                    }

                    select = document.getElementById("DLBeam");
                    var options = ["Central Asia"];

                    var b = document.createElement("option");
                    //b.textContent = "";
                    b.text = "";
                    b.value = "";
                    //select.appendChild(b);
                    select.add(b);

                    for (var i = 0; i < options.length; i++) {
                        var opt = options[i];
                        var el = document.createElement("option");
                        //el.textContent = opt;
                        el.text = opt;
                        el.value = opt;
                        //select.appendChild(el);
                        select.add(el);
                    }
                } else if (rs.SatelliteName == "AsiaSat 8" && rs.TpFreqBand == "Ku-SEA") {
                    var options = ["Central Asia", "South East Asia"];
                    var select = document.getElementById("ULBeam");

                    var a = document.createElement("option");
                    //a.textContent = "";
                    a.text = "";
                    a.value = "";
                    //select.appendChild(a);
                    select.add(a);

                    for (var i = 0; i < options.length; i++) {
                        var opt = options[i];
                        var el = document.createElement("option");
                        //el.textContent = opt;
                        el.text = opt;
                        el.value = opt;
                        //select.appendChild(el);
                        select.add(el);
                    }

                    select = document.getElementById("DLBeam");
                    var options = ["South East Asia"];

                    var b = document.createElement("option");
                    //b.textContent = "";
                    b.text = "";
                    b.value = "";
                    //select.appendChild(b);
                    select.add(b);

                    for (var i = 0; i < options.length; i++) {
                        var opt = options[i];
                        var el = document.createElement("option");
                        //el.textContent = opt;
                        el.text = opt;
                        el.value = opt;
                        //select.appendChild(el);
                        select.add(el);
                    }
                } else if (rs.SatelliteName == "AsiaSat 9" && rs.TpFreqBand == "Ku-AUS (12)") {
                    var options = ["Australia", "East Asia"];
                    var select = document.getElementById("ULBeam");

                    var a = document.createElement("option");
                    //a.textContent = "";
                    a.text = "";
                    a.value = "";
                    //select.appendChild(a);
                    select.add(a);

                    for (var i = 0; i < options.length; i++) {
                        var opt = options[i];
                        var el = document.createElement("option");
                        //el.textContent = opt;
                        el.text = opt;
                        el.value = opt;
                        //select.appendChild(el);
                        select.add(el);
                    }

                    select = document.getElementById("DLBeam");
                    var options = ["Australia", "East Asia"];

                    var b = document.createElement("option");
                    //b.textContent = "";
                    b.text = "";
                    b.value = "";
                    //select.appendChild(b);
                    select.add(b);

                    for (var i = 0; i < options.length; i++) {
                        var opt = options[i];
                        var el = document.createElement("option");
                        //el.textContent = opt;
                        el.text = opt;
                        el.value = opt;
                        //select.appendChild(el);
                        select.add(el);
                    }
                }
            }

        }
    });
    //alert(TpKeyID);
    showResult(str.value);

}

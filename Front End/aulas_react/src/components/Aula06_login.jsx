import { useState } from 'react';

const Aula06_login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagem, setMensagem] = useState('');

    const realizarLogin = () => {
        if (email === 'senai@senai.br' && senha === '123') {
            setMensagem('Login bem-sucedido!');
        } else {
            setMensagem('Email ou senha incorretos');
        }
    };

    return (
        <div style={Estilos.container}>
            <div style={Estilos.card}>
                <img
                    style={Estilos.imagem}
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSEhIVFRUXFhUYFxUVFxcXGBUVFhUWFxUXGBcYHSggGBolHRgVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0dHR0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLf/AABEIAQMAwgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAQIDBQYABwj/xABBEAABAwIEAwYDBwEHAgcAAAABAAIRAyEEEjFBBVFhBhMicYGRMqHwBxRSscHR8SMVQnKCkqLhstIWJCU0Q1Ni/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAIhEBAQADAQACAgIDAAAAAAAAAAECESEDEjEiURNBBDKh/9oADAMBAAIRAxEAPwDxNK0rpXAowCOJSZlJUKjhFj2Cd46rsnVNCIdhXRMIwLUbSB1T2Ogk5SU2i3WeXzRWCGnmD7uykjpe4Wn21Ma17pIEDmeXRD1DfX1/4Whr4UaCwm/IGJkdImevqs2/VHPHQY3YunTblJ3i8puJpQEjWHJPkI6a6ehRhp5mZjYCx6mAtJtgAqEb8vldEd6TeUE43UlEShKNgh7gVCSpXtgKBNQhWlM1Tmi6Q2mNEGPfRbkBk5idItAJlR4l8md+fNG4N7TSc10yHNc21hmBa+b9GeyGxdICDNzPpGqFgwIuSwkhIZwU7DKgClYjGS52/QXIYpUQKAiaWDedBbntpKHCKwpqHwtzEaloNrTf5laNS/cHbEH9/NNp4B5MRHmjvE5wbTbEauNgCJJgeQ+RR1FpawPy5jPxbOkAgNHP91SYykuQTC8KyEOfcQTzmAbR736LsW8HY7AenmFb4NpqB7nWa2wbu46mHG4iBPnFlX4h180fCddb7C+u/sm1JC72qMe8Ahrdhfq7fyjSOhU9CnnbE/CBfzJJ/RA1zLiUfwcgktO9wFPHuR79LJ+Nmm3KTmcReNCBJsqB1PS0Wn0VmKwbWbkEkZhG2bxNB9lDiKDsxtfLJM6zaZ802fSziTgmC73OAASBMTB6nqFYY/CFjXOefC+LCJa+REbReJ3UnZTAVKr6rKZvkcMv915iGibXm4/wozi3D6jMQ6nUkuLCzLqXCAZYNyCT4tLO2VMMZ8CZZfkxJF/VH4TDm6fi8Dlh7SMji4tvJgER8i33VrhsMe7baJn0tISYYdNlnxWV2RqhCArTGtuhAwzMSjlOtLwHlKVrLa+hRIw7rxYawdvP3THj259dkuh2l4bU8bW5W3cPEQCZAIA8iYt5ckuOwufNVENAaJBI+IQ0ho5T7IA2Ou6fisQ5xy5pAJgC4k8kN8MFTmiUpYRqmhyQx5CRNLlyzFSroXIMvG4SkBYSbC+smBMkW1lX1DAUQ0SdQSQDkADoIyg+JzokKmp7yBBJkSDPTWOfsi6WKIcMrM5MGLuBNoERAF/3KtE6NxgpNB7llzFodlbpLh1NuWt9UHQqF9Sahcy7SDEAkumOliT69VNiqxcIL48RDgLskm7gBMiAP9PVDvc17zlBMAXkXMxtOWw57JyjqtYmkQSYFSMxdcuO8bi3yHpS8UqxDSbNkz1MT8wrXildmVopg3k3PKG6HTyMdZVHxMQACLtAHuSZ9iEMvporcsyevsjuEgNeB+KQP0Qgadt535T+4VrgcECMxJiNRsb+sKeMuzZXitqy6o4xeXSBew1Wo4bRfLC6mHCoCHB06taHZpyyLDVZvG1Q5xhkH9NIMdIC1uBw9V2HpDPmY8wSJJEjf0BB6FP5/dL6fUX3AeGfdBTxDQ95qkFzGkADM8d3BHxQC+xkSG6Siu2mAd/UrYlrc7WNDGscAW03vyMmdyXOBMxY9Ab7C4ADuntcWmk0gAaEEtJB6eFRcT4Z95ZVr1asUy1gpEjKGszhxLpE3MARE+RKvcdRyzLd284/sal90fWZJ+OC4A/C4iYHlqpcLhXZWE38AHnyP1zVt2cwhph1Kp4Xvc+GGJAaWuh0aOmo4xAtCuaOB6KvnjLJWyz1bGLrcNc68X2lS0eD2vc78l6HQ4Gx/wAJBI1E3EqR3Acso/DFv5a81xuCqMDpbNPJeOlv1Cz1WlFsp0DoMDZwgdPNeuYvh0wxzYzGxtFtL3gyRtt1Xn3a7BhmKqMD2k5NRZoLQZbyMFp+fQqPthJ9K+We2WqUwYiPL+U2nh3C8W+YH6eaNqssSQAZuDY2OiHaCTbWbjaOnPdc9nV5U7MzpABmIIAmWyDlO+wKrKlPK4tI0MJ4ruDw4WIIITa7pc52kkmOXT0SZXZ5DA1IQnApClE1cuhcgK9oYhj2SSMwnwwPDzcbXHL90dwjDh7w+XZWGS1utxMk6cj6RdZmm8tMj6C0GCcagy0y1oMzb0E31gG/5quN2nkt3YlgOVtnGW5sxJDSSOVyb78kPhMHVqOLWUXSNYBjTfQTMCByXYFrWEVHuacuw8Uu/uibCevK/neO408MJEUmEQDBMmxeGnQ/F8QF7aaCqalxODZTs6zgIMkEg/ht7KtxdBzhm3Jv6aD65KzNN9WBJyyToBcnWAPzkq0+65Q0yAZsDo8wbSU3w3C3LTDvbBDQJNmmNyTB/S60eBwhZTdVn+5LQTANp95MKgwhPeioGyO8ByDcNfnIH+nadVuMRhqdTDMbmhgaHF5iMzSGZcw1F7eRup+f7NnfpgabJc4wTzIvFx/Hqtxi+MOw9I0KFM0XuqF0uAMMIBgSNZkX0hUnAMK8tq1G5Z8LQ0gOzEnNGX+9GXlCue02BLe6quc57nPeCXtLYsCGgEmQJN+t1sONlq8XfZftwWEU8aPCbCs0Hf8AEOXUL0ruadWllEOY4eE6jm0yORgrwnhPFqcOpVwIvrebQAOWpUXZrtpiMEXMpw+kSTkeTAPNpGh584T3OUl8/wBPWBwl2HbhRVe2o8ksqVMsuLi0lhDuViDPRYvt92r7txw+GMVNKjhcN5Qfxfkq7G/ahinNLWU6bHRZ1zHkFh6Vc5nufJLpJJ1JJkla+mpqNj493ksOzvG6uDxDcQxxkHxjUVGk+Jruc39V9McIxNLE0m1G3a9ocCQRYr5Sa6SV7v8AZVxX/wBNsO8fRJhg+IiZ/VL53ex9p9VcdvGdxTIoBne1WuZ3jmgx4SWgdbW5QDsvH+2NHJXlxJLmsdDiS4ZYblPWI1jTovWP7ZL8TSz0ZcS2GvAOUvIEDUSIN+vkvOftFwzG4tzA4ODTJcAJMuglxGpt9aKmeOp1Pzu/r6ZauCbnV0Zup0B6ptXCWBDriA4RYbbKUgHKImfoWPqm1KQbN8vuQbHT63KjVpVdjaEDMBvHt/IQBKv61E1KbmtaS5lzG8auA3GUhUVSmRr5+innFsaSUkpFyQxZXJq5BhBCnwtfLMEgHUDdRkJsEkAXJsPVV+iNUxzRh2VHAOmS1jov4i3MQLwS02kWHUITvHPMu2sABAaBoGjYJcVhYpsOYm5YBtDGtJj/ADPPuE2gFROrnAusp+JZjTfJnwwweYOc+35KHhzQUbxHBggCTmNgBB5bHrAV+/FC3rF0vC3ONRBkbmDAXpvBOEsNCnkmsHvyOEy0DxtLhOw1+flksZwfNUNAATTb4nm3gawHOeXhBN16N2Dovbh5Aa8tph7GAjMQ83EAWBIdBN/RRxmqpndw/gvYhjAx1RxztblGWIhtTODpqd/NZvt5SrMd3b3Bze+NRh0OR8FzT5OB9CF7AKQ8vPX1Xjv2k4gOrO1OwHQJoWXrC4yoyTAzEn0Ve5hN4Ur/AAzseuynzQx4dIcJBBBBBG0HRSt66JATKc7Jww52CTBO/qNnn+isqrC6XNzZWgEkCwLnBoE9SWiBzSiqH66Lf/ZdxI0i9moIkA+YmOqwmJ1VjwHElj2kSL7KnlZMup+mO8dPasFk+8isD4abXPdOwA2HnELzrjUPe4gAycxtcmee+oW24fQH3WtULvFVZkaBfQhz/Oyx+MogaH3C689Zbc2E+MZ6th4AcJiS0iIiLjRLh8GalSnSGtR9NgtpneGz80VUdG085Qzm5XtqUzdrg+mTFntIcAbjdctx0tOoOCUKjadZ8Fr2ObJI0EEkHpLY/wCCVPUwtPEANYGMfJgBsC9yCGiI3kaeS2nDOI0azalVjACRNekDcHMZsNW6EPA5ze5y/aXgbKP9Sj8Di6LjMzKRExIjSCNiOYKXXFNstxDhFSm45mxeINiCAJmfP5qvI91o6HEajbFwe3UB/ij/AAzokxlOjUYXOPdumJyyJgWOU+H289klw/uHmTOJUi5TOmLkbw1ty/8AD8zaw63Q7cOSBFydlccGw7D4HAySMwEjKBf/ADEj0VMfsl+jnuu0HlMDQTr+QU4aq/EYgPe5wEAnwjk3Ro9oROGqFVxqdi1wkrRYGkXZSLODm36SCR7LPYMnktLw4EBdHnHP6Lf+xmis/ER/TqUXiq2TLrg2i/LdX/ZzBtpvp1GABuUNAB/+I02xmnVwe0nycVW8OLiW+LwhrpHUlsekA/JXVAho1RywicyrR1qwym942Xi3bKkGPcdZkybk3XplKsZWV7aYBpcKhI8vePrqp/DSmGfXkzm+KSLaaazqocaxxdJLnHKB4iSQNhJ2V3jKXjMwRtCtuJ4OnRw4xBIMtaMo/ETMfJc9nXXKyAwREujQ+V1JhXNYCcskXnlbVNp8YaSQ4RO8yPZS4+gGFwnUC3mEgqqs7M4ndE8MBzBCDW6vOzz2940OjXcxf9U2HaGXI9h4JVH3Sm7KJY8/MAk33VBx5meXBoaJMj9lo6IacOwMEQTmA2J/RVGNpGI23XoYzjguXWFr0EDXpmCFosQwNJtdVeJKjnF8apaVV9J4qU3Fr26OH5dR0WqwPFvvTHUS5tJzmyGm7C4XllpFwPDNuoWexDZQD6e6heKzqy4tg2g+KGkiNIBi0+HQ8/olKPDzUpvY5ly0EPklvhmD0MZr/wAHqfEHFuSoC+m7TOSS12ktdr7807ATOVjhBi2hB6A2uNxpK3KLNP4bUBIyzB1GnolWsqcNMnwvNzcF0Hy8Oi5L/HB+amw9MNeI8TpiLCCduo5p9Kk5jHVGvh4zGebSYj1hU1N7p+IjaRbWxvyV04t7gkGfGGjXkCTHkB8/USjYr6YR2GQ9MKwwlO4TYwuVXHDae60eAKpMMy1louDYVxNl24TUcmdaPAUBFvZWLGgC6GwlN4hWzTbxBDKpQlC40HmvPe2+LEENuQf+I5r0DEVA1jiNgV5dx0h2aDNpMaD6up26X88d1hq+LcXX5q24nxRtTBd0SJBaR5tn9yFWcSw2W6qi9ctdcCmJR9TGZrkmbSfJDktmbphcpnTVSpKD4IKHaEXgqUlNAr13sRiy6nYn4CI9LKzqUSQqzsHhHBmbotVisNFwNV345f8AXnek6xPEMGs1xJkaLe8Wp2Kw/EhJKOc4fzu1BXchXORWIZdD1IjquSumJ8GZ8Os7GInaCdNBdOxDzlIEDLtbM0nSd9midihAXQSIMRIPLQGNxop31ZdIaCCBr8z7IbGwGcU8Wzf9X7LlI4sk6jpy6JUu6ymKv8Q1oo0WhoDoJceZn/k+wQFHC+Iwbtt/mi58gj8d8WWZygCebtXf7iR6JcVKjo01a4OlogsNFlc4SlyK6PPFDOrPAsuAVtuCYfRZXCUbAx5q9wmOgZQfVdcnHLn1s8PTbqnYulAlVeDxwt4hKsHvc4WupWapYq+JmWGJg2KxXFWNDHHmdOY+oXoPEuHOdh3EWiHHyaZIXkHHuKHNUGgm3oSltljo85VTxd1/T+Vmq2qssbi8xPqgMu65r10xG0KRzRCnbTCa+kl0OwxcFZcJZKrqjEfwt8FAa9l7DuLcPJuCbfkVdYnijQCDaFmuyzpwtjEOd7iBohuI1HX3XoYSWbefnv5WJeMcSmYMrIYqpJJlWGJq2hUuKct6U/njpXYl0lBFFVEM4LjydMOoOANxNiIvuI2Uxa076GfPQwY56IQlcKpaeY3E7Wn1S7GxZihN87vUifWy5D/2h/8An69lyOy6qWhVp05DfFUEy6QRmMTbpceyHDVBhQAwDcmT5aAfmiWBLhOHyOpK74dV6qnFPkjMM6F0YXVSym2pbXNmjRaLg2AzQszwRpcvR+B4QNAXR8+bc2U0GdwBzfELhWfCqLgIgrR4eiCIS4gtosc+wAC5r6/0fHy/tU8b4s2jS7sCXva4AchlMuK8D7V0IdrqJ91tqvF318RiaxPgawtYOkj5bx0WD4zVzkdGgeyPJNLSdZt4TmqWpS6JjWKKqZn7qSu4Ax6fmh5Oyjc4oWsbWF07DzOUb/NRPPzVhwvCOqVA1mtgANevzSwa9V7KYctwYblIJk/6oKgxpy2W7xuFZRoMZEEMaLdAsDxbEtkrv8r+Lgzn5KTEmdlVYlita9edFV4ppnVbNXFVV0O4IzE0kMGrlyi0DOCfhy24c2QRY6Fp5+WyfUaoxZJYZFfl+a5PLlyApGKemVC0KammxCiaRRLAhmuCeytdUI1vZ+tlIXofA60ry/gsyCvQ+C1soA6Ks+kM51vMHVELO9v8Z/S7sT4mnnpui+H4xUfbnEeHmSCPLyUvjrI+OW48+4RVDKb3GJfI8oJ06SPzWVxDofJ0Mo7HYrLv0A5D6lUr6+aw1QzvVsYIcxsSqp1nFG1JAhVb33UrTyDKe/1dNrkASPq6hY/81E+pJS7HQhjMy9N+yHs53mINd48FIA+b3fCPYE/yvOuHtkwF9J9g+FNoYKkMsOe3O/mS6/5QjC5A+19eGEASea8px85pK9l45wg1dOS8447wN7ZnZdvnZ8dRx3/brMMMlR14SVmlqBq4gI3LikjsQJQL2qU1E+myVG9UnAxYoX01YGlzQ9Y7JbiMoPKuUq5JoxE9pTEoRjVKaiex6GUlMLbDTQ8KrG0LdcBxhMSV5/wp8FaThtQtiF0eaHpG6pk5/igcwgO1ryWNDr6k+Vvr3UOCqk3J0TuNiaTieQ95TZRPC9eW9pQDcLNUXw4ea0XaU3WcaJMbrjzv5O3H6WmcTdVuPZDzCIeY1UNbW6WmgVsrmtuiaYlRlviSi1vYnAd5XptiZOkTsvpWmyLbCw8hovDvsjwYdiGuInKZ8j/Er2PHY/uyNxN0+ONvIl6ZTH7F4iqALrE9pi54OVuvutc7EteAQdQqvGtGy6PKacnplt4vxbBPBMtIVbR4aXL0viuBB1VPicIANFa+e+jj6MZVwcIZrSCtHiaI3VTi6ESpZTS0uwdZyCqKdyYKaS3Z5xDC5TZQuQ02wq4uTJSEqezn5lPQQqIoohVrhTBV/gaxWewjld4Jq6fKo5xquHuPOyNrjPTI6GPaf0Vdwx8J3GcQabqTwbZgCOjvCbeRKrk58Z+UebdoviIQXZqgH4qmCJEyR5IvtHUGYmREmFovsl4K2q99Z4MNswj8V5/MLjwny9Hbnl8cKoe1WGyYqoAIBdmH+YBx+ZKpccyHR0C2f2l0AzEMPNkerXH/ALgsqcFVrPAo03VDlBIaCbTCX1msrB8st4Sh8MFY9oeFdxWpsvLqFCoehqMzEei2fYj7Mq9V7amLb3dK5LSfG4iQBA0E3Vd9qhB4nWa3SmyhTHQCiwx/uKT46H5S3Ubv7FMBFN9U6n2/m69A4ng2uGY7fWiz/wBleHyYBh/ESfr3WoxFVPjuXiPpZZ1SYanq68bWhQ46uBqQFD2nxz2U81PVeaYri9Vz7uK68Zvtc3x/TYY97SJmVRYqvGqrqOLcBBP8oavi+arbJBxx6XFOkSqnF1LQjXVTCrcWFzZ1fGAiE1yY96cHyp7UMlcnZlyzK6UsJAlCnDlARFNQhTUijAo7CLQ4JZug5W+Brq2HEsmloOMhBdsapbSa+dx7qOhjSDKbx09/Qc0ai4C6b3GoTmUYbjNCXy3R0fNei9hXuw1Du9y4uPqsM85RTzi4DJH+E3/Jaqjid5UP8eT5W1b37JDPtKAcKD58X9QH/aUL9m+LyYoQfjpub6hzT+6F7V4vNTZOzj+QVFwbiJo1qdX8Lr/4TZ3yJU/WyeuzeeNvlp9M4HGSBsIklfPXHsd95xVavM97Vc4R+GYZ/tDR6L0LtB2oNLBVHsddzMjCNJqeEO+c+i8s4XUBq0wdMwQ9dS6Dwl1a+g+CnucBTZMHKPnzVN/4qI8E6HXVT4rG/wDlwG7sHzC88xmNiQOey6MJJOoX8q1+P4qXsLiZ+uSzD6rQTa/5IPD8RPw7dUNiq1yRumtgzHQjE15OsFAuN9bqKtVlQOco3JWQdWrW1VfWfaUmdR1XWhTtPIHc9cKijeEiTZ9Ju9XKKVyO20hTmpqc0JYJVPTKiyp7EwUUwo7CvVawomi+E8pLFtm3U33zK1xOgBJ8gJVNjOI5GSACdBPMqnxHGqjmlhywdSGwY3EjUec6p/5fiWee1iOLUXyalBxJm7auWB0Hdm/um0OPZXQW/wBPS3xgDQAkwfP16KmziFGFK5a+lNbWWJxnfDUiD8JDYE6Q4QT6hDU6MjXf8kJngWSNqke8qVu6pOLF/GKhpCgXTTsS0gGHA2IOo0+ZUFKoA4X3QczqnCi65AmNY5HdLutqR6Jg+1wcxtKpDG5QKdSbODRBDvwuFr6eSqMZUOY+aykkiL2P5ozB45wgG7R0vCvj628qV85PpdU6pCa6ueanaGPEUj3hAJ8MzHUbFBFVt/RdFLkkpCmucp2mhC5I4pCmuclokeVFmSuKYUpjs65NXLMQKWmmMCewoxj3JoMLimErAnD1I16hw1F757um98a5GudHnlBRNbh1ZrDUfTcymHNa57hAa53whw+IHeImFttpW8VrEkN219dP3QJiETicpdZwcC0XAcIN5FwEIWoUYkboLrsqj0TmvQ2OiAJoT3BIxASEKSkepH7fUJHsKYCh9MnyrqcZhmmJExrE3id4lNzJSEwCKmHpucRSJAH/ANpYJ2+KwHrHmn95UYfGHEQIMyPRwkH0Kiy1GNFQBzWukB4mDcgifMaInB8Xc0FjvGwiMshvp8JEei04yYOmPIH0OiRykPEg6l3Y8OUy1pJeQJ+FrnXaI2B9EKXp9l0mlMcUwuTSUBOTUspEGcuXLlhK0rgUwFKtsDi5MqPgSlj257X0RvDqtOnXYXgOaILu8zNjnDWEuNjYanoFmFYLC4ipTFR9Z9OhSaAQKvjDXEk5aYMht9YjlKkrcbpUaBp4WllqPzB1Zzs7y12+YsbcybACNdUvaLjWGqf+2w7GGSX1HZqtVxtHiqTl02Ji0Hnnq1edXuN9/wCTdNwA5CY88lLK5gEwfRLRQkJpF1I4bJYSU0RgLk5+shOBlAS0zpKaBqlDhollbbOzrlyb80ZWT08U9ogPcByBMDnA2TS8uk7/AFqowU7ayYtI080Rh6k23CGKQOvK22WBTAVq3dnMPWpMqYbEPDnC1Oq1zgeQDmtBB5gB3ss1jcG+i8sqNLXD2I5g6EdUfoEeZJKalaFtsdKRLC5ZjQisBSDnEOEw0n1kLlyDCeMNFNrsgDZrObIAnKGiwOoHONd1QvN1y5GtDd07NK5clMXZM3XLlqxE9iVclFEdU9gsVy5ATFwXLkGcnsXLkYxVzdPVcuTwtcUjQuXIlWGFqkMEH++AJuBAzWBsDN5F1YcSJc05jOUnKTcgF5ETqRbRcuR/oFWlakXIQT1y5ciL/9k="
                    alt="Logo" />

                <h1 style={Estilos.titulo}>Login</h1>

                <div style={{ width: '100%', marginBottom: '10px', textAlign: 'left' }}>
                    <label>E-mail</label>
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        style={Estilos.input} 
                        placeholder="Ex: senai@senai.br" 
                    />
                </div>

                <div style={{ width: '100%', marginBottom: '20px', textAlign: 'left' }}>
                    <label>Senha</label>
                    <input 
                        type="password" 
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)} 
                        style={Estilos.input} 
                        placeholder="Digite sua senha" 
                    />
                </div>

                {mensagem && <p style={Estilos.mensagem}>{mensagem}</p>}

                <button style={Estilos.botao} onClick={realizarLogin}>Entrar</button>
            </div>
        </div>
    );
};

const Estilos = {
    container: {
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        minHeight: '80vh', backgroundColor: '#ffffff', padding: '20px'
    },
    card: {
        display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px',
        backgroundColor: '#5f5f5f', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
        width: '100%', maxWidth: '350px'
    },
    imagem: { width: '80px', height: '80px', borderRadius: '50%', marginBottom: '20px', objectFit: 'cover' },
    titulo: { margin: '0 0 25px 0', color: '#0d00ff', fontSize: '24px' },
    input: {
        width: '100%', padding: '10px', marginTop: '5px', borderRadius: '4px',
        border: '1px solid #676767', boxSizing: 'border-box'
    },
    botao: {
        width: '100%', padding: '12px', borderRadius: '8px', border: 'none',
        backgroundColor: '#1603aa91', color: 'white', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer'
    },
    mensagem: {
        color: '#fff',fontSize: '14px',
        marginBottom: '15px', textAlign: 'center',fontWeight: '500'
    }
};

export default Aula06_login;
/**
 * stickybits - Stickybits is a lightweight (~2KB) alternative to `position: sticky` polyfills
 * @version v1.3.3
 * @link https://github.com/dollarshaveclub/stickybits#readme
 * @author Jeff Wainwright <jjwainwright2@gmail.com>
 * @license MIT */
!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?module.exports=i():"function"==typeof define&&define.amd?define(i):t.stickybits=i()}(this,function(){"use strict";function t(t,i){if("undefined"==typeof window)throw Error("stickybits requires `window`");return this.el=t,this.offset=i&&i.stickyBitStickyOffset||0,this.vp=i&&i.verticalPosition||"top",this.useClasses=i&&i.useStickyClasses||!1,this.styles=this.el.style,this.positionStickyVal="fixed",this.setStickyPosition(),"fixed"!==this.positionStickyVal&&!0!==this.useClasses||this.manageStickiness(),this}function i(t){var i=this;this.privateInstances=t||[],this.cleanup=function(){return i.privateInstances.forEach(function(t){return t.cleanup()})}}function s(s,e){var o="string"==typeof s?document.querySelectorAll(s):s;"length"in o||(o=[o]);for(var n=[],c=0;c<o.length;c+=1){var r=o[c];n.push(new t(r,e))}return new i(n)}return t.prototype.setStickyPosition=function(){for(var t=["","-o-","-webkit-","-moz-","-ms-"],i=this.styles,s=this.vp,e=0;e<t.length;e+=1)i.position=t[e]+"sticky";return""!==i.position&&(this.positionStickyVal=i.position,"top"===s&&(i[s]=this.offset+"px")),this},t.prototype.manageStickiness=function(){function t(){var t=r.scrollY||r.pageYOffset,i=c.contains(a),p=c.contains(l);if(t<f)i&&(c.remove(a),"fixed"===s&&(n.position=""));else if(t>f&&t<h)i||c.add(a),p&&(c.remove(l),n.bottom=""),n.position=s,n[e]=o+"px";else if(t>h&&!p){if(c.remove(a),c.add(l),"fixed"!==s)return;n.top="",n.bottom="0",n.position="absolute"}}var i=this.el.parentNode,s=this.positionStickyVal,e=this.vp,o=this.offset,n=this.styles,c=this.el.classList,r=window;i.classList.add("js-stickybit-parent");var f=this.el.getBoundingClientRect().top,h=f+i.offsetHeight-(this.el.offsetHeight-o),a="js-is-sticky",l="js-is-stuck",p=void 0;return this.checkStickiness=function(){p||(p=!0,r.requestAnimationFrame(t),r.setTimeout(function(){p=!1},0))},r.addEventListener("scroll",this.checkStickiness),this},t.prototype.cleanup=function(){var t=this.el,i=this.styles;i.position="",i[this.vp]="",t.classList.remove("js-is-sticky","js-is-stuck"),t.parentNode.classList.remove("js-stickybit-parent"),window.removeEventListener("scroll",this.checkStickiness),this.checkStickiness=!1},s});

const screen = {
	width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
	height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
}
const child = {
	height: document.querySelectorAll('.child')
}
console.log(child.height.clientHeight)
stickybits('.child', {
	useStickyClasses: true,
	stickyBitStickyOffset: ~~(screen.height / 2)
})

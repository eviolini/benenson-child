/*from https://github.com/fanmingfei/array-reverse-ios12, because of https://stackoverflow.com/questions/52390368/array-state-will-be-cached-in-ios-12-safari-is-bug-or-feature/*/
!function(){if(function(){function r(){var r=[0,1];return r.reverse(),0===r[0]}return r()||r()}()){Array.prototype._reverse=Array.prototype.reverse;var r={enumerable:!(Array.prototype.reverse=function(){return Array.isArray(this)&&(this.length=this.length),Array.prototype._reverse.call(this)})};Object.defineProperties(Array.prototype,{_reverse:r,reverse:r})}}();

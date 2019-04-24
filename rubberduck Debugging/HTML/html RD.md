# HTML 질문

- [`DOCTYPE`은 무엇을 하나요?](#doctype은-무엇을-하나요)
- [여러 언어로 되어 있는 콘텐츠의 페이지를 어떻게 제공하나요?](#여러-언어로-되어-있는-콘텐츠의-페이지를-어떻게-제공하나요)
- [다국어 사이트를 디자인하거나 개발할 때 주의해야할 사항은 무엇인가요?](#다국어-사이트를-디자인하거나-개발할-때-주의해야할-사항은-무엇인가요)
- [`data-`속성은 무엇에 좋은가요?](#data-속성은-무엇에-좋은가요)
- [HTML5를 개방형 웹 플랫폼으로 간주할 때, HTML5의 구성 요소는 무엇인가요?](#html5를-개방형-웹-플랫폼으로-간주할-때-html5의-구성-요소는-무엇인가요)
- [`cookie`, `sessionStorage`, `localStorage` 사이의 차이점을 설명하세요.](#cookie-sessionstorage-localstorage-사이의-차이점을-설명하세요)
- [`<script>`, `<script async>`, `<script defer>` 사이의 차이점을 설명하세요.](#script-script-async-script-defer-사이의-차이점을-설명하세요)
- [왜 일반적으로 CSS `<link>` 태그를 `<head></head>` 태그 사이에 위치시키고, JS `<script>` 태그를 `</body>` 직전에 위치시키는 것이 좋은 방법인가요? 다른 예외적인 상황을 알고있나요?](#왜-일반적으로-css-link-태그를-headhead-태그-사이에-위치시키고-js-script-태그를-body-직전에-위치시키는-것이-좋은-방법인가요-다른-예외적인-상황을-알고있나요)
- [프로그레시브 렌더링이 무엇인가요?](#프로그레시브-렌더링이-무엇인가요)
- [이미지 태그에 `srcset` 속성을 사용하는 이유는 무엇인가요? 이 속성의 컨텐츠를 실행할 때 브라우저의 프로세스를 설명하세요.](#이미지-태그에-srcset-속성을-사용하는-이유는-무엇인가요-이-속성의-컨텐츠를-실행할-때-브라우저의-프로세스를-설명하세요)
- [다른 HTML 템플릿 언어를 사용해본 적이 있나요?](#다른-html-템플릿-언어를-사용해본-적이-있나요)

----------------------------------------------------------------------------------

## DOCTYPE은 무엇을 하나요?
- DOCTYPE은 document type의 약어로 `문서 형식 선언`을 의미한다. 이 형식선언은 SGML(Standard Generalized Markup Language)이나 XML(eXtensible Mark up Language) 기반 내에 그 문섯가 특정 DTD(Document Type Definition)를 지정해 따르는 것을 말한다.

- 브라우저가 해당 문서를 직접적으로 설정할 수 없고 그 문서의 형식과 설정을 파악하고 렌더링을 진행 해야 하기 때문에 설정해야 한다. 

- 여담으로 과거의 웹페이지는 넷스케이프 네비게이터용 / MS IE용 2가지로 버전이 되어 있었으나 W3C에서 웹표준 제정 이후 브라우저 들은 새로운 표준 방식과 이전의 방식으로 제작된 사이트를 구분하기 위해 렌더링을 위한 Quirks-mode(호환모드) / Standard-mode(표준모드) 두가지를 제공하게 했다. [MDM 참조]

- 레이아웃 엔진 방식으로는 세가지가 존재한다 `호환모드` / `거의 표준 모드` / `표준모드` 등의 방식이 있다 `호환 모드(quirks mode`)에서는 기존 방식으로 제작된 웹사이트들을 표현하기 위해 내비게이터 4(Navigator 4)와 인터넷 익스플로러 5의 비표준 동작들을 에뮬레이션한다. `완전 표준 모드(full standards mode; 이하 표준 모드)`에서는 (아마도) HTML과 CSS에 의해 웹 페이지가 표시된다. `거의 표준 모드(almost standards mode)`는 소수의 호환 모드 요소만 지원한다.

- W3C측에서 2014년 이후 HTML5의 spec을 통일화함으로서 현재는 HTML5의 문서형식선언을 주도하는 것이 좋다.( 또한 국내의 경우 IE 사용량의 감소와 업데이트 지원 중지도 한몫을 했다)

- 마크업이란? : 문서의 내용 뿐만이 아니라 내용이 어떻게 배치되고 표현 되는지를 나타내는 기술

- HTML5의 특징을 몇가지 설명해보기 : 
  > - None 플러그인: 멀티미디어 태그를 적용시키는게 가능해짐 이전에는 Flash 플러인 등을 통해 사용했지만 HTML 5 부터는 media 태그로 좀더 빠르고 사용하기 편하게 진행됨
  > - 하위 호환성: 기존의 모든 문서(HTML4, XHTML 1.0) 타입을 포함한다

참고자료

- https://html.spec.whatwg.org/multipage/syntax.html#the-doctype
- https://html.spec.whatwg.org/multipage/xhtml.html
- https://quirks.spec.whatwg.org/

내가 찾은 참고자료

- https://ko.wikipedia.org/wiki/%EB%AC%B8%EC%84%9C_%ED%98%95%EC%8B%9D_%EC%84%A0%EC%96%B8
- http://doomok.dothome.co.kr/html5/html5.html
- https://webdir.tistory.com/40
- https://developer.mozilla.org/ko/docs/Web/HTML/Quirks_Mode_and_Standards_Mode#What_are_the_differences_between_the_modes.3F
- http://doomok.dothome.co.kr/html5/html5.html
- https://hsivonen.fi/doctype/ [브라우저가 각 모드를 어떻게 적용하는지 알려주는 글]

[[↑] Back to top](#html-질문)

## 여러 언어로 되어 있는 콘텐츠의 페이지를 어떻게 제공하나요?

- 질문의 요점이 알기 어려움 프론트엔드의 경우만이라 가정해 짧게 작성 어떻게 개발되는지 경우라면 아래 개발시 주의사항을 참조.
- Lang 속성을 활용해 언어별 데이터를 설정 :
  > 주로 HTML lang Attribute를 활용하거나 data-set 을 가지고 표현한다. 언어에 따라 다른 lang을 표현할 수 있도록 지원해야 한다.
- meta 태그 charset으로 인코딩(UTF-8)을 설정하기, 웹표준 & 접근성에 맞는 레이아웃 구조 설정 
  > 다국어 지원의 방법은 front-end 보다 back-end 에서 지원하는 경우가 많다.(여기서 back-end의 지원은 다국어시 문법상의 조합이나 어떠한 데이터 set을 전달할 때 경우라 추측 함)하지만 front-end 에서도 해야할 일은 있다. 바로 encoding 방식과 문서에서 주로 사용하는 언어 설정을 해주는 것은 필수다.(W3C에서도 UTF-8을 사용할 것을 권유하고 있다.) 그리고 다국어 지원을 위한 css(언어특성상 box 모델링에 영향을 주는 경우도 있다)와 javascript message set 을 언어형식에 맞게 분리 하는 것도 필요하다. html 선언시 웹접근성,웹표준에 맞추게 된다면 주요 사용언어를 기입해주어야 한다. [설명 참조](http://insanehong.kr/post/front-end-developer-interview-html)
- 여담으로 서버 사이드 랜더링일 경우, HTTP요청 시 클라이언트에서 Accept-Language 헤더와 같이 기본 언어 설정에 대한 정보를 보낸다.

참고 자료

- https://www.w3.org/International/getting-started/language
- http://insanehong.kr/post/front-end-developer-interview-html/[설명 참조]
- https://www.w3.org/International/questions/qa-forms-utf-8.ko.html[인코딩 방식]
- https://developer.mozilla.org/ko/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML

[[↑] Back to top](#html-질문)

## 다국어 사이트를 디자인하거나 개발할 때 주의해야할 사항은 무엇인가요?
- 개발자  
  - `HTML에 lang 속성을 사용합니다.`
  - `텍스트를 포함한 이미지 사용 금지` : 
    > 이미지에 텍스트를 배치하는 것은 잘 보이고 시스템 글꼴이 아닌 글꼴을 모든 컴퓨터에 표시하는데 여전히 널리 사용되는 방법입니다. 그러나 이미지에 텍스트를 번역하려면, 텍스트 문자열에 각 언어에 대해 만들어진 별도 이미지가 필요합니다. 이 같은 대체 방식이 늘어나면 금방 통제가 어려워집니다.
  - `번역된 문자열을 연결하지 않습니다` : 각 언어별 문법에 맞게 Message Set을 해야한다. 
    > "오늘의 날짜는 " + date + "입니다" 와 같은 것은 하지마세요. 단어의 순서가 다른 언어에서는 문자가 망가지게됩니다. 대신 각 언어에 대한 매개변수와 함께 템플릿 스트링을 사용하세요. 예를 들면, 영어와 한국어로된 다음 두 문장을 보세요. I will travel on {% date %}, 나는 {% date %}에 여행 갈거야. 변수의 위치는 언어의 문법에 따라 달라집니다.

- UX / UI 
  - `사용자들이 쉽게 모국어를 선택 할 수있게 유도` : 
    > 사용자가 번거롭지 않도록 쉽게 국가/언어를 변경할 수 있도록 합니다.
    > ex: 해당 언어 링크로 안내하기 등등
  - `단어/문장 길이를 제한해 언어에 맞는 레이아웃을 고려하기` : 
    > 일부 언어는 다른 언어로 작성될 때 더 길어질 수도 있습니다. 디자인에 레이아웃이나 오버 플로우 문제 발생에 주의하세요. 디자인에 필요한 텍스트의 양을 정하거나, 디자인이 꺠질 수 있는 디자인은 하지 않도록 하는 것이 가장 좋습니다. 문자 수 제한은 제목, 레이블, 버튼과 같은 항목에서 사용됩니다. 본문이나 댓글과 같이 자유롭게 흐르는 텍스트에 대해서는 문제가 되지 않습니다.
    - `각 언어별 문화권에 맞는 UI 구조를 고려하기`
      - `각 언어별 색상 이해도` : 
        > 색상은 언어와 문화에 따라 다르게 인식됩니다. 적절한 색상을 사용하여 디자인해야 합니다.
      - `날짜와 통화 형식` : 
        > 날짜는 종종 다른 방식으로 표현됩니다. 예) 미국의 "May 31, 2012" vs. 유럽의 "31 May 2012".
      - `언어를 읽는 방향` : 
        > 영어는 왼쪽에서 오른쪽으로, 위에서 아래로 읽지만, 전통적인 일본어는 위에서 아래로, 오른쪽에서 왼쪽으로 읽습니다.

참고자료
- https://www.quora.com/What-kind-of-things-one-should-be-wary-of-when-designing-or-developing-for-multilingual-sites
- https://docs.junojunho.com/interview/html [개인 설명글]
- 

[[↑] Back to top](#html-질문)

## data-속성은 무엇에 좋은가요?

[[↑] Back to top](#html-질문)
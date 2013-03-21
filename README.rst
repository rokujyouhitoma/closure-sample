README
=======

Directory
----------

{{{
  /
  |- README.rst
  |- bin/
  |    |- compile
  |    |- compilejs
  |    |- lint
  |    |- tools/
  |    |    |- calcdeps.py   //Closure Library
  |    |    |- compiler.jar  //Closure Compiler
  |    |    `- run_test.js
  |    `- updatedep
  |
  `- src/
       |- compiled/
       |    |- compiled.js   //Auto generated
       |    `- compiled.map  //Auto generated
       |- compiled.html
       |- goog/              //Closure Library
       |    `- *
       |- index.html
       |- ( r12a/ )
       `- test/
           |- _phantomjs/
           |    `- closurelibrary-tap.js
           |- all_test.html
           |- run_testserver
           `- *_test.html
}}}


install Library
----------------

gjslint
^^^^^^^^

.. code-block::
   # easy_install is Python library installer.
   # there are 'distribute' version. NOT 'setuptools'.
   curl -O http://python-distribute.org/distribute_setup.py
   python distribute_setup.py

   # closure linter install.
   sudo easy_install http://closure-linter.googlecode.com/files/closure_linter-latest.tar.gz

   # same install method.
   http://closure-linter.googlecode.com/files/closure_linter-latest.tar.gz
   tar zxf closure_linter-latest.tar.gz
   cd closure_linter-latest
   python setup.py install

sass
^^^^^

.. code-block:: python
   # gem depend on Ruby. Please Install Ruby.
   gem install haml

Closure Library
----------------

src/goog/
^^^^^^^^^^

.. code-block::
   cd src/
   svn export http://closure-library.googlecode.com/svn/trunk/closure/goog

tools/calcdeps.py
^^^^^^^^^^^^^^^^^^

.. code-block::
   cd bin/tools/
   svn export http://closure-library.googlecode.com/svn/trunk/closure/bin/calcdeps.py


Closure Compiler
-----------------

tool/compiler.jar
^^^^^^^^^^^^^^^^^^

.. code-block::
   cd bin/tools/
   curl -O http://closure-compiler.googlecode.com/files/compiler-latest.zip
   unzip compiler-latest.zip

qmake
------
http://qt.nokia.com/downloads/qt-for-open-source-cpp-development-on-mac-os-x

MacOSX
^^^^^^^

.. code-block:: python
   curl -O http://get.qt.nokia.com/qt/source/qt-mac-carbon-opensource-4.7.3.dmg
   open qt-mac-carbon-opensource-4.7.3.dmg

refer
 http://code.google.com/p/phantomjs/wiki/BuildInstructions#Mac_OS_X


phantomjs
----------

refer
 http://code.google.com/p/phantomjs/wiki/Installation

MacOSX
^^^^^^^

.. code-block:: python
   http://phantomjs.googlecode.com/files/phantomjs-1.2.0-source.zip
   unzip phantomjs-1.2.0-source.zip
   cd phantomjs
   qmake -spec macx-g++ && make

MISC
-----

test:
 https://github.com/waka/js-closurelibrary-unittest-tap

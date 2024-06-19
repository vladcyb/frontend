# C. Удаление дубликатов

<table>
  <thead>
    <tr>
      <th>Compiler</th>
      <th>Time limit</th>
      <th>Memory limit</th>
      <th>Input</th>
      <th>Output</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>All compilers</td>
        <td>1 секунда</td>
        <td>10Mb</td>
        <td rowspan=11>stdin or <br>input.txt</td>
        <td rowspan=11>stdin or <br>output.txt</td>
      </tr>
      <tr>
        <td>Node.js 14.15.5</td>
        <td>1 секунда</td>
        <td>20Mb</td>
      </tr>
      <tr>
        <td>Oracle Java 7</td>
        <td>1 секунда</td>
        <td>40Mb</td>
      </tr>
      <tr>
        <td>Kotlin 1.4.30 (JRE 11)</td>
        <td>1.5 секунд</td>
        <td>40Mb</td>
      </tr>
      <tr>
        <td>Oracle Java 8</td>
        <td>1 секунда</td>
        <td>40Mb</td>
      </tr>
      <tr>
        <td>Scala 2.13.4</td>
        <td>1 секунда</td>
        <td>20Mb</td>
      </tr>
      <tr>
        <td>OpenJDK Java 15</td>
        <td>1 секунда</td>
        <td>40Mb</td>
      </tr>
      <tr>
        <td>Kotlin 1.1.50 (JRE 1.8.0)</td>
        <td>1 секунда</td>
        <td>40Mb</td>
      </tr>
      <tr>
        <td>Kotlin 1.3.50 (JRE 1.8.0)</td>
        <td>1 секунда</td>
        <td>30Mb</td>
      </tr>
      <tr>
        <td>Kotlin 1.5.32 (JRE 11)</td>
        <td>1.5 секунд</td>
        <td>40Mb</td>
      </tr>
      <tr>
        <td>Node JS 8.16</td>
        <td>1 секунда</td>
        <td>20Mb</td>
      </tr>
  </tbody>
</table>

**Legend**

Дан упорядоченный по неубыванию массив целых 32-разрядных чисел. Требуется удалить из него все повторения.

Желательно получить решение, которое не считывает входной файл целиком в память, т.е., использует лишь константный объем памяти в процессе работы.

<br>

**Input format**

Первая строка входного файла содержит единственное число _n, n ≤ 1000000_.

На следующих _n_ строк расположены числа — элементы массива, по одному на строку. Числа отсортированы по неубыванию.

<br>

**Output format**

Выходной файл должен содержать следующие в порядке возрастания уникальные элементы входного массива.

<br>
Sample 1

<table>
    <thead>
        <tr>
            <td>Input</td>    
            <td>Output</td>    
        </tr>
    </thead>
    <tr>
        <td>
            5<br>
            2<br>
            4<br>
            8<br>
            8<br>
            8
        </td>
        <td valign='top'>
            2<br>
            4<br>
            8
        </td>
    </tr>
</table>

<br>
Sample 2

<table>
    <thead>
        <tr>
            <td>Input</td>    
            <td>Output</td>    
        </tr>
    </thead>
    <tr>
        <td>
            5<br>
            2<br>
            2<br>
            2<br>
            8<br>
            8
        </td>
        <td valign='top'>
            2<br>
            8
        </td>
    </tr>
</table>
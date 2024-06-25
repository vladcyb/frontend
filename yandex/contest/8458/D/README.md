# D. Генерация скобочных последовательностей

<table>
  <tr><td>Ограничение времени</td><td>1 секунда</td></tr>
  <tr><td>Ограничение памяти</td><td>20Mb</td></tr>
  <tr><td>Ввод</td><td>стандартный ввод или input.txt</td></tr>
  <tr><td>Вывод</td><td>стандартный вывод или output.txt</td></tr>
</table>


Дано целое число _n_. Требуется вывести все правильные скобочные последовательности длины _2 ⋅ n_, упорядоченные лексикографически (см. https://ru.wikipedia.org/wiki/Лексикографический_порядок).
В задаче используются только круглые скобки.

Желательно получить решение, которое работает за время, пропорциональное общему количеству правильных скобочных последовательностей в ответе, и при этом использует объём памяти, пропорциональный _n_.

## Формат ввода

Единственная строка входного файла содержит целое число _n, 0 ≤ n ≤ 11_

## Формат вывода

Выходной файл содержит сгенерированные правильные скобочные последовательности, упорядоченные лексикографически.

## Пример 1

<table>
  <thead>
    <tr>
      <th>Ввод</th>
      <th>Вывод</th>
    </tr>
  </thead>
  <tr>
    <td valign='top'>2</td>
    <td>
        (())<br>
        ()()
    </td>
  </tr>
</table>

## Пример 2

<table>
  <thead>
    <tr>
      <th>Ввод</th>
      <th>Вывод</th>
    </tr>
  </thead>
  <tr>
    <td valign='top'>3</td>
    <td>
        ((()))<br>
        (()())<br>
        (())()<br>
        ()(())<br>
        ()()()
    </td>
  </tr>
</table>

### Some java tool 

1. HashMap容量一定要为2的幂呢?
* HashMap中的数据结构是数组+单链表的组合，我们希望的是元素存放的更均匀，
最理想的效果是，Entry数组中每个位置都只有一个元素，这样，查询的时候效率最高，不需要遍历单链表，
也不需要通过equals去比较K，而且空间利用率最大，时间复杂度最优。
那如何计算才会分布最均匀呢？我们首先想到的就是%运算，
哈希值%容量=bucketIndex，SUN的大师们是否也是如此做的呢？我们阅读一下这段源码：



HashMap 的实现不是同步的，这意味着它不是线程安全的。它的key、value都可以为null。此外，HashMap中的映射不是有序的。



HashMap是通过"拉链法"实现的哈希表。它包括几个重要的成员变量：table, size, threshold, loadFactor, modCount。
　　table是一个Entry[]数组类型，而Entry实际上就是一个单向链表。哈希表的"key-value键值对"都是存储在Entry数组中的。 
　　size是HashMap的大小，它是HashMap保存的键值对的数量。 
　　threshold是HashMap的阈值，用于判断是否需要调整HashMap的容量。threshold的值="容量*加载因子"，当HashMap中存储数据的数量达到threshold时，就需要将HashMap的容量加倍。
　　loadFactor就是加载因子。 
　　modCount是用来实现fail-fast机制的。


// 若“key为null”，则将该键值对添加到table[0]中


若要添加到HashMap中的键值对对应的key已经存在HashMap中，则找到该键值对；然后新的value取代旧的value，并退出！


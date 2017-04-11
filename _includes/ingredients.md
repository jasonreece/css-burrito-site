## What's in our burrito template?

**css-burrito has four main ingredients.**

### **1.  index.scss**
* This file imports all of the other files from the **libs**, **global** and **module** sections.
* It has an **inbox** section where developers that don't usually work on the project can leave temporary code that is easily seen by the maintainers of the project.
* It also has a **shame** section for quick fixes, hacks, and other questionable techniques.  Be sure to fix them later.

### **2.  libs**
* This section houses third party CSS libraries like [Normalize](http://necolas.github.io/normalize.css/), [Bootstrap](http://getbootstrap.com/), or [Foundation](http://foundation.zurb.com/).
* It also contains a ```_libs-variable-overrides.scss``` file for overriding third party variables.

### **3.  global**
* `_settings.scss` - global maps and variables
* `_utilities.scss` - extends, mixins, functions, and utilities.
* `_base.scss` - global defaults for base-level tags (body, p, etc.)
* `_layout.scss` - global layout classes (margin, padding, floats, etc).
* `_skin.scss` - global skin classes (gradients, colors, box-shadows, etc).
* `_typography.scss` - global typography classes.

### **4.  modules**
* Any unit of style that can be found across multiple pages (Buttons, Navigations, Modals).
* **Most of your styles should be found here.**
